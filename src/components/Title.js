import React from 'react';
import styled from "styled-components";


const NewTitle = styled.h1`
display: flex;
justify-content: center;
color: grey;
font-size: 40px;
`;

const Newdiv = styled.div`
display: flex;
justify-content: center;

`;
const Title = props => {
  console.log(props)
  return (
    <Newdiv>
      <NewTitle>{props.title}</NewTitle>
    </Newdiv>
  );
};
export default Title;
