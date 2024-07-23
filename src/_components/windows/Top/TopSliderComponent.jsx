import { useState,useEffect } from 'react';
import './styles/TopSlider.css';

function TopSliderComponent(){

    const [currIndex,setIndex] = useState(0);

    const sliderPanel = document.querySelector('.slider_panel');
    const controlBtns = document.querySelectorAll('.control_btn');

  
    useEffect(()=>{
        const timer = setInterval(function(){
            setIndex((prevIndex) => (prevIndex + 1) % 3);
            console.log("onMount Interval currIndex : "+currIndex);
        }, 3000);
        return ()=>{clearInterval(timer)};
    },[])

    useEffect(()=>{
        // sliderPanel.style.left= `-${index * 100}%`;
            console.log("currIndex : "+currIndex);
    },[currIndex]);
   

    function onClickBtn(bRLDirection){
        bRLDirection ? setIndex((currIndex+1)%3) :currIndex == 0 ?setIndex(2) : setIndex((currIndex-1)%3);
    }

    function onClickDotBtn(index){
        setIndex(index);
    }

    // $(function(){

    //     $controlBtns.on('click',function(){
    //         currentIndex = parseInt($(this).data('index'));
    //         updateSlider(currIndex);

    //     });
        
    // });

    return(
        <div id="sliderZone">
            <div id="sub_photo_bg">
                <ul className="slider_panel"style={{left:`-${currIndex * 100}%`}}>
                    <li className="slider_image"><img src="_images/1.jpg" alt=""/></li>
                    <li className="slider_image"><img src="_images/2.jpg" alt=""/></li>
                    <li className="slider_image"><img src="_images/3.jpg" alt=""/></li>
                </ul>
                <div className="control_panel">
                    <div className={currIndex==0 ? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(0)}}></div>
                    <div className={currIndex==1 ? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(1)}}></div>
                    <div className={currIndex==2 ? 'control_btn active' : 'control_btn'} onClick={()=>{onClickDotBtn(2)}}></div>
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