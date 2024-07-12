import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './PagiNation';

const Album = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 5;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            setPhotos(res.data);
        })
        .catch((error) => {
            console.error("사진 데이터 가져오는 데 실패했습니다.", error);
        });
    },[]);

    const lastPhoto = currentPage * photosPerPage;
    const firstPhoto = lastPhoto - photosPerPage;
    const currentPhotos  = photos.slice(firstPhoto, lastPhoto);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <h1>사진첩</h1>
        {currentPhotos.map((photo) => (
            <div key={photo.id}>
                <img src={photo.thumbnailUrl} />
            </div>
        ))}
        <Pagination
            itemPerPage={photosPerPage}
            totalItems={photos.length}
            paginate={paginate}
            currentPage={currentPage}
        />
        </>
    )


}
export default Album;