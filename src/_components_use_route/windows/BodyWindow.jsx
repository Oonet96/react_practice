import './styles/BodyWindow.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BodyMenuComponent from "./Body/BodyMenuComponent";
import BodyContentComponent from "./Body/BodyContentComponent";

function BodyWindow(props) {
    return (
        <div id="bodyArea">

        <Routes>

            {props.menuArr.map((data, index) => (
                <Route path={`/${data.title}/*`} element={
                    <>
                        <BodyMenuComponent menuData={data} />
                        <Routes>
                            <Route index element={<BodyContentComponent contentData={props.contentArr[index].contents[0]}/>}/>
                            {data.subMenu.map((subData, subIndex) => (<Route path={subData} element={
                                <BodyContentComponent contentData={props.contentArr[index].contents[subIndex]} />
                            } />))}
                        </Routes>
                    </>
                }/>))
            }

        </Routes>

           
        </div >
    );
}

export default BodyWindow;