import { useState,useEffect } from 'react';
import {SlideImgList} from '../../util/ImageAddress.jsx'
import { BtnTop,BtnBottom } from '../../util/SvgComponents.jsx'


function SlideComponent(){
    const [curIndex, setIndex] = useState(0);

    function onClickDirBtn(bRLDirection){
        bRLDirection ? setIndex((curIndex+1)%SlideImgList.length) :curIndex === 0 ? setIndex(SlideImgList.length-1) : setIndex((curIndex-1)%SlideImgList.length);
    }

    useEffect(()=>{
        const Interval = setInterval(function(){
            setIndex((prevIndex)=>((prevIndex +1) % SlideImgList.length));
        },4500);
        return ()=>{
            clearInterval(Interval);
        };
    },[])
    
    function onClickDotBtn(key){
        setIndex(key);
    }
    
    return (
        <div id="main_slide_box">

            <div id="main_slide">
                <ul className="slider_panel" style={{left:`-${(curIndex+1) * 100}%`}}>
                    {SlideImgList.map(img=>(<li><a href="#"><img src={img} alt=""/></a></li>))}
                    {SlideImgList.map(img=>(<li><a href="#"><img src={img} alt=""/></a></li>))}
                </ul>
                
                <div className="control_panel">
                    {SlideImgList.map((item,index)=>(<div key={index} className={`control_btn ${curIndex === index ? 'btn_check' : ''}`} onClick={()=>onClickDotBtn(index)}></div>))}
                </div>
                
                <div className="slide_btn">
                    <div className="leftBtn" ><BtnTop className="arw-btn" onClick={()=>onClickDirBtn(false)}/></div>
                    <div className="rightBtn" ><BtnBottom className="arw-btn" onClick={()=>onClickDirBtn(true)}/></div>
                </div>
            
            </div>
        
        </div>
    );
}

export default SlideComponent;