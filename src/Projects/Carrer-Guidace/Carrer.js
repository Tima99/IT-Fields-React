import React, { useState, useEffect } from "react";
import "./style.css";
import Api from "./Api";
import Card from "./Card.js";
import Nav from "./Nav.js";

const category = ["all" , ...new Set(Api.map((val) => val.category))];

function Carrer() {
  const [data, setData] = useState(Api);

  function dataChange(e , field) {
    

    let parent = e.target.parentElement; 
    if(parent.className != 'naver')
      parent = parent.parentElement;
      console.log(parent );
    parent = parent.querySelectorAll('.nav-contain');
    console.log(parent);
    parent.forEach(element => {
      if(element.id == e.target.id)
        element.classList.add('active-click');
      else
        element.classList.remove('active-click' , 'active');

    });
    switch (field) {
      case "all":
        setData(Api)
        break;
    
      default:
        const filtered = Api.filter((val) => val.category == field);
        setData(filtered);
        break;
    
    }
  }

  return (
    <div className="container">
      <Nav category={category} dataChange={dataChange} />
      <Card data={data} />
    </div>
  );
}

export default Carrer;
