import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Title from "./components/Title.js"
import Header from "./components/header.js"
import styled from "styled-components";
import Image from "./components/Image.js"
import Explanation from "./components/explanation.js"
import Footer from "./components/footer.js"

const Container = styled.div`
max-width: 80%;
height: 100%;
margin: 0 auto;
background: lightblue;
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=fa1uG6GVm3pTl3lnwRkLspee8kHm09PBrGsMNmpb")
      .then(response => {
        console.log(response.data);
        setData(response.data)
      })
      .catch(error => {
        console.log("Sorry no data", error);
      });
  }, []);

  return (
<Container>
 <Title title={data.title}/>
 <Header date ={data.date}/>
 <Image img={data.url}/>
 <Explanation explain={data.explanation}/>
 <Footer/>
 </Container>
  
  )}


export default App;
