import React from 'react';
import styled from "styled-components"

const Newheader = styled.p`
display: flex;
justify-content: center;
color: grey;
font-size: 25px;
font-weight: bold;
&:hover{
color: red;
}
`;

const NewP = styled.p`
display: flex;
justify-content: center;
font-size: 25px;
color: grey;
`;

const Display = styled.div`
display: flex;
justify-content: space-evenly;


`;

const Header = props => {
  console.log(props)
  return (
    <Display className="container">
      <NewP>This is the photo of the day:</NewP>
      <Newheader>Date: {props.date}</Newheader>
    </Display>
  );
};
export default Header;