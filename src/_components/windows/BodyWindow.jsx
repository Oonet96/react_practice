import './styles/BodyWindow.css';
import BodyMenuComponent from "./Body/BodyMenuComponent";
import BodyContentComponent from "./Body/BodyContentComponent";

function BodyWindow(props){
    return(
        <div id="bodyArea">
            <BodyMenuComponent menuPage={props.menuPage}/>
            <BodyContentComponent/>
        </div>
    );
}

export default BodyWindow;