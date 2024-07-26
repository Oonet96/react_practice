import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './style/reset.css';
import Header from './components/windows/Header'
import Footer from "./components/windows/Footer";
import Main from "./components/pages/Main";

function App(){

    return (
        <>
            <Header/>

            <Router>

                <Routes>

                    <Route path="/" element={<Main/>}/>

                </Routes>

            </Router>

            <Footer/>
        </>
    );
}

export default App;