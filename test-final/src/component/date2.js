import React from 'react';

const date2 = () => {
  return (
    <input
      type="date"
      className="form-control"
      placeholder="Pick a date"
      name="closingDate"
      min={new Date().toISOString().split("T")[0]}
      // onChange={(e) => setClosingDate(e.target.value)}
    />
  );
};

export default date2;