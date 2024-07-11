import React, { useRef, useEffect, useState} from 'react';
import './Dodgegobelin.css';

const Game = () => {
    const canvasRef = useRef(null);
    const [player, setPlayer] = useState({ x: 50, y: 50 }); // 플레이어 위치 설정, 위치는 실시간으로 변경
    const [obstacles, setObstacles] = useState([{ x: 300, y: 50 }]); // 장애물 위치 설정, 장애물 위치는 변경 (자동)
    const [isRunning, setIsRunning] = useState(true); //boolean값 설정
    const playerImageRef = useRef(null);
    const obstacleImageRef = useRef(null);

    useEffect(() => {
        const playerImg = new Image();
        playerImg.src = process.env.PUBLIC_URL + '/player.png';
        // 컴퓨터.환경에서.public 으로 시작하는 폴더에 player.png 라는 이미지가 있다면 주소를 가져와서 보여줌
        playerImg.onload = () => {
            playerImageRef.current = playerImg; // 개발자 전용으로 이미지를 무사히 가져왔는지 확인하는 코드
            console.log('Player 이미지 가져오기 성공');
        };
        playerImg.onerror = () => { // 플레이어 이미지를 가져오지 못하면 console 에서 실패를 보여줌
            console.error('Player 이미지 가져오기 실패');
        };

        const obstacleImg = new Image();
        obstacleImg.src = process.env.PUBLIC_URL + '/obstacle.png';
        obstacleImg.onload = () => {
            obstacleImageRef.current = obstacleImg;
            console.log('Obstacle 이미지 가져오기 실패');
        };
        obstacleImg.onerror = () => {
            console.error('Obstacle 이미지 가져오기 실패');
        };
    }, []);


    useEffect(() => {
        const handleKeyDown = (event) => {
            let newPlayer = { ...player };
            switch (event.key) {
                case 'ArrowUp': // 화살표 ↑   w 를 원하면 case 'w'
                    newPlayer.y = Math.max(newPlayer.y - 10, 0);
                    break;
                case 'ArrowDown':
                    newPlayer.y = Math.min(newPlayer.y + 10, canvasRef.current.height - 40);
                    break;
                case 'ArrowLeft':
                    newPlayer.x = Math.max(newPlayer.x - 10, 0);
                    break;
                case 'ArrowRight':
                    newPlayer.x = Math.min(newPlayer.x + 10, canvasRef.current.width - 40);
                    break;
                default:
                    break;
            }
            setPlayer(newPlayer);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [player]);


    useEffect(() => {
        const canvas = canvasRef.current; // canvas = 사진이나 그림, 배경을 표현할 때 사용
        const context = canvas.getContext('2d');

        const updateGame = () => {
            if (!isRunning) return;

            context.clearRect(0, 0, canvas.width, canvas.height);


            if (playerImageRef.current) { // public 에 이미지가 존재하면 이미지보여주기
                context.drawImage(playerImageRef.current, player.x, player.y, 40, 40);
            } else { // 이미지가 없다면 x = 40 y = 40  정사각형 크기의 파란색으로 표현
                context.fillStyle = 'blue';
                context.fillRect(player.x, player.y, 40, 40);
            }


            let newObstacles = obstacles.map(obstacle => ({
                ...obstacle,
                x: obstacle.x - 5
            })).filter(obstacle => obstacle.x > 0);


            newObstacles.forEach(obstacle => {
                if (obstacleImageRef.current) {
                    context.drawImage(obstacleImageRef.current, obstacle.x, obstacle.y, 40, 40);
                } else {
                    context.fillStyle = 'red';
                    context.fillRect(obstacle.x, obstacle.y, 40, 40);
                }

                if (
                    player.x < obstacle.x + 40 &&
                    player.x + 40 > obstacle.x &&
                    player.y < obstacle.y + 40 &&
                    player.y + 40 > obstacle.y
                ) {
                    setIsRunning(false);
                }
            });

            setObstacles(newObstacles);
        };

        const interval = setInterval(updateGame, 1000 / 60); 
        return () => clearInterval(interval);
    }, [player, obstacles, isRunning]);
    useEffect(() => {
        const addObstacle = () => {
            if (!isRunning) return;

            const newObstacle = {
                x: canvasRef.current.width,
                y: Math.random() * (canvasRef.current.height - 40) 
            };
            setObstacles(prevObstacles => [...prevObstacles, newObstacle]);
        };

        const interval = setInterval(addObstacle, 300); // 0.3 초
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="game-container">
            {/* canvas 는 동영상 캡처나 사진을 찍고 찍은 사진을 보여줄 때 사진이 보여질 수 있는 틀을 제공
                이 코드에서는 게임 틀을 제공하는 것
            */}
            <canvas ref={canvasRef} width="600" height="400" className="game-canvas" />
            <button onClick={() => setIsRunning(!isRunning)} className="game-button">
                {isRunning ? 'Pause' : 'Start'}
            </button>
            {!isRunning && <h2>Game Over</h2>}
        </div>
    );
};

export default Game;
