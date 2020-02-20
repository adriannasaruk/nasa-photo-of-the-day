import React from 'react';

const Image = props => {
  console.log(props)
  return (
    <div className="Title-container">
      <h1 className="title">{props.img}</h1>
    </div>
  );
};
export default Image;