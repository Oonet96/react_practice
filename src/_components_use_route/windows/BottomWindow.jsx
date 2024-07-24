import BottomMenuComponent from "./Bottom/BottomMenuComponent";
import BottomAddrComponent from "./Bottom/BottomAddrComponent";

function BottomWindow(){
   
    return(
        <div id="bottomArea">
            <BottomMenuComponent/>
            <BottomAddrComponent/>
        </div>
    );
}

export default BottomWindow;