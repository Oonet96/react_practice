import { useState } from "react";
import TopWindow from "../windows/TopWindow";
import BodyWindow from "../windows/BodyWindow";
import BottomWindow from "../windows/BottomWindow";

const menuArr = [
    {title:'캠핑장소개',subMenu:['인사말','시설보기','오시는길']},
    {title:'사이트보기',subMenu:['시설물보기']},
    {title:'예약안내',subMenu:['예약안내','실시간예약']},
    {title:'특별함',subMenu:['특별함']},
    {title:'인기여행지',subMenu:['인근여행지']},
    {title:'커뮤니티',subMenu:['공지사항','고객문의','이용후기','포토갤러리']},
];


function Main(){
    const [menuPage, setMenuPage] = useState(0);

    return(
        <>
            <TopWindow setMenuPage={e=>setMenuPage(e)} menuArr={menuArr}/>  
            <BodyWindow menuPage={menuPage} menuArr={menuArr}/>
            <BottomWindow/>
        </>
    );
}

export default Main;