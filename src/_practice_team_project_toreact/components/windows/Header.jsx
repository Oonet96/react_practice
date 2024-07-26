import '../../style/main_header_JH.css';
import { top_event_background, m_ic_top_bn } from '../util/ImageAddress.jsx';
import { BtnKakao, BtnTop, BtnBottom, BtnClose, IconSearch, IconBag } from '../util/SvgComponents.jsx';

function Header(){


    return (
        <>
            <div id="btn_scroll">
                <a href=""><BtnKakao/></a>
                <a id="btn_scroll_up"><BtnTop/></a>
                <a id="btn_scroll_down"><BtnBottom/></a>
            </div>

            <div id="searchImg">

                <div className="searchSize">

                    <div className="searchClose">
                        <BtnClose/>
                    </div>

                    <div className="searchInput">
                        <input type="text" placeholder=" 검색어를 입력해주세요."/>
                        <div className="inputImg">
                            <a href="#">
                                <img src="../../images/ic_header_search2.png" alt=""/>
                            </a>
                        </div>
                    </div>

                    <div className="searchFav">
                        <p>인기 검색어</p>
                        <div><a href="#">토퍼</a></div>
                        <div><a href="#">베게</a></div>
                        <div><a href="#">샤워기</a></div>
                    </div>

                </div>

            </div>
        
            <div id="header">

                <div id="header_top">

                    <a href="#">
                        <img src={top_event_background} alt="로딩" className="topBannerImg"/>
                        <span>카카오채널 추가시 할인쿠폰 지급
                            <img src={m_ic_top_bn} alt="쿠폰"/>
                        </span>
                    </a>

                </div>

                <div id="header_bottom">

                    <div id="header_login">
                        <a href="login.html" className="login">로그인</a>
                        <span>ㅣ</span>
                        <a href="#" className="login">회원가입</a>
                        <span>ㅣ</span>
                        <a href="#" className="login">고객센터</a>
                    </div>

                    <div id="logo"><a href="mainpage.html"><img src="images/title_logo.png" alt=""/></a></div>
                
                    <div id="header_gnb">

                        <ul id="main_gnb">

                            <li><a href="product-brand.html">브랜드</a></li>
                            <div>/</div>

                            <li><a href="product-all-page1.html">all</a></li>
                            <div>/</div>

                            <li>

                                <a href="product-bath.html">바스</a>

                                <ul className="gnb">
                                    <li><a href="product-bath.html">ALL</a></li>
                                    <li><a href="#">샤워기</a></li>
                                    <li><a href="#">싱크대</a></li>
                                    <li><a href="#">세면대</a></li>
                                    <li><a href="#">필터</a></li>
                                </ul>

                            </li>
                            <div>/</div>

                            <li>

                                <a href="product-utensils.html">주방용품</a>
                                
                                <ul className="gnb">
                                    <li><a href="product-utensils.html">ALL</a></li>
                                    <li><a href="#">도마</a></li>
                                    <li><a href="#">식기건조대</a></li>
                                </ul>

                            </li>
                            <div>/</div>

                            <li>

                                <a href="product-living.html">리빙</a>

                                <ul className="gnb">
                                    <li><a href="product-living.html">ALL</a></li>
                                    <li><a href="#">매트리스</a></li>
                                    <li><a href="#">토퍼</a></li>
                                    <li><a href="#">베게</a></li>
                                </ul>    

                            </li>
                            <div>/</div>

                            <li>

                                <a href="#">CS</a>

                                <ul className="gnb">
                                    <li><a href="cs-qna.html">QNA</a></li>
                                    <li><a href="cs-notice.html">공지사항</a></li>
                                    <li><a href="cs-faq.html">FAQ</a></li>
                                </ul>

                            </li>

                        </ul>

                    </div>
                    
                    <div id="cart">

                        <div className="search">
                            <a href=""><IconSearch className="imgSearch"/></a>
                            <a href=""><IconBag/></a>
                        </div>

                    </div>
                </div>

                <div className="line"></div>
                
            </div>
                
        </>
    );
}

export default Header;