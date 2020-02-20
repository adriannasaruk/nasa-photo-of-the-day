import React from 'react';
import styled from "styled-components"

const Newimage = styled.img`
display: flex;
width:800px;
height: 550px;
font-size: 100px;
margin: 0 auto;
justify-content: center;
`;



const Image = props => {
  console.log(props)
  return (
    <div>
      <Newimage alt= "nasa Image" src={props.img} />
    </div>
  );
};
export default Image;