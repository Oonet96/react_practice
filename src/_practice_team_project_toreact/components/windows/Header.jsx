import '../../style/main_header_JH.css';

function Header(){


    return (
        <>
            <div id="btn_scroll">
                <a href=""><img src="images/svg/btn_quick_kakao.svg" alt="kakao"/></a>
                <a id="btn_scroll_up"><img src="images/svg/btn_quick_top.svg" alt="top"/></a>
                <a id="btn_scroll_down"><img src="images/svg/btn_quick_bottom.svg" alt="bottom"/></a>
            </div>

            <div id="searchImg">

                <div class="searchSize">

                    <div class="searchClose">
                        <img src="images/svg/btn_search_close.svg" alt=""/>
                    </div>

                    <div class="searchInput">
                        <input type="text" placeholder=" 검색어를 입력해주세요."/>
                        <div class="inputImg">
                            <a href="#">
                                <img src="images/ic_header_search2.png" alt=""/>
                            </a>
                        </div>
                    </div>

                    <div class="searchFav">
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
                        <img src="images/2c8f696ba5f27ed5c5950f5660c53a79.jpg" alt="로딩" class="topBannerImg"/>
                        <span>카카오채널 추가시 할인쿠폰 지급
                            <img src="images/m_ic_top_bn.png" alt="쿠폰"/>
                        </span>
                    </a>

                </div>

                <div id="header_bottom">

                    <div id="header_login">
                        <a href="login.html" class="login">로그인</a>
                        <span>ㅣ</span>
                        <a href="#" class="login">회원가입</a>
                        <span>ㅣ</span>
                        <a href="#" class="login">고객센터</a>
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

                                <ul class="gnb">
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
                                
                                <ul class="gnb">
                                    <li><a href="product-utensils.html">ALL</a></li>
                                    <li><a href="#">도마</a></li>
                                    <li><a href="#">식기건조대</a></li>
                                </ul>

                            </li>
                            <div>/</div>

                            <li>

                                <a href="product-living.html">리빙</a>

                                <ul class="gnb">
                                    <li><a href="product-living.html">ALL</a></li>
                                    <li><a href="#">매트리스</a></li>
                                    <li><a href="#">토퍼</a></li>
                                    <li><a href="#">베게</a></li>
                                </ul>    

                            </li>
                            <div>/</div>

                            <li>

                                <a href="#">CS</a>

                                <ul class="gnb">
                                    <li><a href="cs-qna.html">QNA</a></li>
                                    <li><a href="cs-notice.html">공지사항</a></li>
                                    <li><a href="cs-faq.html">FAQ</a></li>
                                </ul>

                            </li>

                        </ul>

                    </div>
                    
                    <div id="cart">

                        <div class="search">
                            <a href="#"><img src="images/svg/ic_hd_search.svg" alt="" class="imgSearch"/></a>
                            <a href="order-basket.html"><img src="images/svg/ic_bag.svg" alt=""/></a>
                        </div>

                    </div>
                </div>

                <div class="line"></div>
                
            </div>
                
        </>
    );
}

export default Header;