import './styles/BodyWindow.css';
import BodyMenuComponent from "./Body/BodyMenuComponent";
import BodyContentComponent from "./Body/BodyContentComponent";

function BodyWindow(){
    return(
        <div id="bodyArea">
            <BodyMenuComponent/>
            <BodyContentComponent/>
        </div>
    );
}

export default BodyWindow;