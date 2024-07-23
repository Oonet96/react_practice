import './styles/TopTitle.css';

function TopTitleComponent(){

    return(
        <div id="titleZone">
            <div id="gnb">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Join</a></li>
                    <li><a href="#">Mypage</a></li>
                </ul>                    
            </div>
            <div id="logo">
                <img src="_images/logo.jpg" alt=""/>
            </div>
        </div>
    );
}

export default TopTitleComponent;