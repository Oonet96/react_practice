import { useState } from "react";
import TopWindow from "../windows/TopWindow";
import BodyWindow from "../windows/BodyWindow";
import BottomWindow from "../windows/BottomWindow";
function Main(){
    const [menuPage, setMenuPage] = useState(0);

    return(
        <>
            <TopWindow setMenuPage={e=>setMenuPage(e)}/>  
            <BodyWindow menuPage={menuPage} />
            <BottomWindow/>
        </>
    );
}

export default Main;