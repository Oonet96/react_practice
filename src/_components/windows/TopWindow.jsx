import TopTitleComponent from "./Top/TopTitleComponent";
import TopMenuComponent from "./Top/TopMenuComponent";
import TopSliderComponent from "./Top/TopSliderComponent";
function TopWindow(props){
    return(
        <div id="topArea">
            <TopTitleComponent/>
            <TopMenuComponent setMenuPage={e=>props.setMenuPage(e)}/>
            <TopSliderComponent/>
        </div>
    );
}
export default TopWindow;