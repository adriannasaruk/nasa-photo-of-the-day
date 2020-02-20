import React from 'react';
import styled from "styled-components";

const NewEx = styled.p`
display: flex;
justify-content: center;
width: 800px;
`;
const Newdivi = styled.div`
display: flex;
justify-content: center;
`;


const Explanation = props => {
  console.log(props)
  return (
    <Newdivi>
      <NewEx>{props.explain}</NewEx>
    </Newdivi>
  );
};
export default Explanation;