import React from 'react';
import styled from "styled-components"

const Newfooter = styled.p`
display: flex;
justify-content: center;
color: grey;
padding: 20px;
background: lightgrey;
`;

const Footer = props => {
  console.log(props)
  return (
    
      <Newfooter>Copyright Adrian Nasaruk 2020</Newfooter>
   
  );
};
export default Footer;