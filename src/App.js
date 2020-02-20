import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Title from "./components/Title.js"
import Header from "./components/header.js"


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
<div>
 <Title title={data.title}/>
 <Header date ={data.date}/>
 <img src={data.url} alt="nasa picture"/>
 </div>
  
  )}


export default App;
