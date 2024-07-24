import { useState,useEffect } from 'react';
import './styles/TopSlider.css';

const ImageArr = [ "_images/1.jpg","_images/2.jpg","_images/3.jpg"];

function TopSliderComponent(){

    const [currIndex,setIndex] = useState(0);
  
    //onMount!
    useEffect(()=>{
        const Interval = setInterval(function(){
            setIndex((prevIndex) => (prevIndex + 1) % ImageArr.length);
            console.log("onMount Interval currIndex : "+currIndex);
        }, 3000);
        return ()=>{clearInterval(Interval)};
    },[])

    //currIndex 값이 변경될때마다 동작하는곳
    useEffect(()=>{
            console.log("currIndex : "+currIndex);
    },[currIndex]);
   

    function onClickBtn(bRLDirection){
        bRLDirection ? setIndex((currIndex+1)%ImageArr.length) :currIndex === 0 ? setIndex(2) : setIndex((currIndex-1)%ImageArr.length);
    }

    function onClickDotBtn(index){
        setIndex(index);
    }
   
    return(
        <div id="sliderZone">
            <div id="sub_photo_bg">
                <ul className="slider_panel"style={{left:`-${currIndex * 100}%`}}>
                    {ImageArr.map(image=>(<li className="slider_image"><img src={image} alt=""/></li>))}
                    {/* <li className="slider_image"><img src="_images/1.jpg" alt=""/></li>
                    <li className="slider_image"><img src="_images/2.jpg" alt=""/></li>
                    <li className="slider_image"><img src="_images/3.jpg" alt=""/></li> */}
                </ul>
                <div className="control_panel">
                    {ImageArr.map((image,index)=>(<div className={currIndex === index? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(index)}}></div>))}
                    {/* <div className={currIndex==0 ? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(0)}}></div>
                    <div className={currIndex==1 ? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(1)}}></div>
                    <div className={currIndex==2 ? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(2)}}></div> */}
                </div>
                <div className="direct_btn">
                    <div className="left_btn"><img src="_images/left_btn.png" alt="" onClick={()=>{onClickBtn(false);}}/></div>
                    <div className="right_btn"><img src="_images/right_btn.png" alt="" onClick={()=>{onClickBtn(true);}}/></div>
                </div>
            </div>
        </div>
        
    );
}

export default TopSliderComponent;