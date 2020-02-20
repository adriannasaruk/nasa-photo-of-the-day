import React from 'react';

const Header = props => {
  console.log(props)
  return (
    <div className="Title-container">
      <p className="title">{props.date}</p>
    </div>
  );
};
export default Header;