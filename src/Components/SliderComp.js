import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderComp = props => {
  const { range, defaultVal } = props;
  const getStr = mark => {
    if(!mark){return "";}
    if(typeof mark === "number"){
      if(mark < 24){
        return mark+'h';
      }else{
        return (mark/24)+'D';
      }
    }else{
      if(mark.includes('h')){
        return parseInt(mark);
      }else{
        return parseInt(mark)*24;
      }
    }
  };
  
  const wrapperStyle = { width: 400, margin: 50 };
  const handleChange = (val) =>{
    console.log(getStr(marks[val]));
  }
  
  const marks = range.reduce((a, c, i)=> {
    let obj = {};
    obj[i+1] = getStr(c)
    return Object.assign(a, obj);
  },{})
  console.log(marks);
  return (
    <div style={wrapperStyle}>
      <p>Slider with fixed values</p>
      <Slider 
        min={1} 
        max={Object.keys(marks).length} 
        defaultValue={props.defaultValue} 
        marks = {marks}
        step={null} 
        onChange = {handleChange}  
      />
    </div>
  );
}

export default SliderComp;
