import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Happy from './Happy';

const currDAte = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "blue";
}
else if (curDate >= 12 && curDate < 15) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
}
else if (curDate >= 15 && curDate < 19) {
  greeting = "Good Evening";
  cssStyle.color = "green";
}
else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(

  <>
    <div className="firstgreet">
      <h1> Hello!! , <span style={cssStyle}> {greeting} </span> </h1>
    </div>

    <h1 className="heading">Gallery</h1>

    <div className="img_div">
      <img src={img1} alt="example" />
      <img src={img2} alt="example" />
      <img src={img3} alt="example" />
    </div>

    <div className="img_diff">
      <Happy />
    </div>

    <div className="dtfetch">
      <p> Current DAte is: {currDAte} </p>
      <p> Current Time is: {currTime} </p>
    </div>

  </>

  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
