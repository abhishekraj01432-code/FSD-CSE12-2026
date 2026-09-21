import React from 'react'
import Cat from '../Images/Cat.png'

function ImageManupulation() {

const[height, setHeight] = React.useState(200);
const[width, setWidth] = React.useState(200);
const[red, setRed] = React.useState(230);
const[green, setGreen] = React.useState(60);
const[blue, setBlue] = React.useState(140);
const[angle, setAngle] = React.useState(45);
const[marginLeft, setMarginLeft] = React.useState(300);
const[marginTop, setMarginTop] = React.useState(0);

function EnhanceHeight() {
    setHeight(height + 10);
}

function EnhanceWidth() {
    setWidth(width + 10);
}

function ReduceHeight() {
    setHeight(height - 10);
}

function ReduceWidth() {
    setWidth(width - 10);
}

function ChangeBgColor() {
    // alert("hiii");
    setRed(Math.random() * 256);
    setGreen(Math.random() * 256);
    setBlue(Math.random() * 256);
}

function RotateImage() {
    setAngle(angle + 15);
}

function MoveRight() {
    setMarginLeft(marginLeft + 10);
}

function MoveLeft() {
    setMarginLeft(marginLeft - 10);
}

function MoveUp() {
    setMarginTop(marginTop - 10);
}

function MoveDown() {
    setMarginTop(marginTop + 10);
}

  return (
    <div>
        <h2 style={{color: "white", backgroundColor: "blue"}}>Image Manipulation using React</h2>
        <div style={{border: "2px solid red", height: "300px", width: "400px"}}>
        <img src={Cat} height={height} width={width} style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, transform: `rotate(${angle}deg)`, marginLeft: `${marginLeft}px`, marginTop: `${marginTop}px`}}/>
       
        </div>
        <button onClick={EnhanceHeight}>EnhanceHeight</button>
        <button onClick={EnhanceWidth}>EnhanceWidth</button>
        <button onClick={ReduceHeight}>ReduceHeight</button>
        <button onClick={ReduceWidth}>ReduceWidth</button>
        <button onClick={ChangeBgColor}>ChangeBgColor</button>
        <button onClick={RotateImage}>RotateCat</button>
        <button onClick={MoveRight}>MoveRight</button>
        <button onClick={MoveLeft}>MoveLeft</button>
        <button onClick={MoveUp}>MoveUp</button>
        <button onClick={MoveDown}>MoveDown</button>


        <div>
        <h2>Height = {height}</h2>
        <h2>Width = {width}</h2>
        <h2>Color code :{red}, {green}, {blue}</h2>
       </div>
    </div>
    
  )
}

export default ImageManupulation
