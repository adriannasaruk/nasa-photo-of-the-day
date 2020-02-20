import React from 'react';

const Title = props => {
  console.log(props)
  return (
    <div className="Title-container">
      <h1 className="title">{props.title}</h1>
    </div>
  );
};
export default Title;
