import './styles/BodyMenu.css';
import BodyMenuBoxComponent from './BodyMenuBoxComponent';

function BodyMenuComponent(props){
    
    return (
        <div id="leftmenuZone">
            <BodyMenuBoxComponent menuPage={props.menuPage} menuArr={props.menuArr}/>
            <div id="left_banner_box">
                <span className="left_banner_title">고객센터</span>
                <ul>
                    <li className="left_banner">010-1234-1515</li>
                    <li className="left_banner">농혐 000-00-00000<br/>홍길동</li>
                </ul>
            </div>
        </div>
    );
}

export default BodyMenuComponent;