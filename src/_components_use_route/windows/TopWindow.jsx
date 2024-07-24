import TopTitleComponent from "./Top/TopTitleComponent";
import TopMenuComponent from "./Top/TopMenuComponent";
import TopSliderComponent from "./Top/TopSliderComponent";
function TopWindow(props){
    const topArea = {
        // position:'fixed',
        // top:0,
        // left:0,
        // zIndex:999
    }

    return(
        <div id="topArea" style={topArea}>
            <TopTitleComponent/>
            <TopMenuComponent menuArr={props.menuArr}/>
            <TopSliderComponent/>
        </div>
    );
}
export default TopWindow;