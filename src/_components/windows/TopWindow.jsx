import TopTitleComponent from "./Top/TopTitleComponent";
import TopMenuComponent from "./Top/TopMenuComponent";
import TopSliderComponent from "./Top/TopSliderComponent";
function TopWindow(){
    return(
        <div id="topArea">
            <TopTitleComponent/>
            <TopMenuComponent/>
            <TopSliderComponent/>
        </div>
    );
}
export default TopWindow;