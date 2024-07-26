import { BrowserRouter as Routes, Route, Link} from "react-router-dom";
import '../../style/mainpage_JH.css';
import "../util/SvgComponents.jsx";
import SlideComponent from "../windows/Main/SlideComponent.jsx";

function Main(){

    return(
        <>
            <div id="main">
                
                <SlideComponent/>

                <div id="main_best">
                    <h1>BEST PRODUCT</h1>
                    
                    <div className="bestList">
                    
                        <ul className="bestImg">
                            <li><a href="#"><img src="images/tkfka1.PNG" alt=""/>
                                <div className="listDecoBox">26%</div>
                            </a></li>
                            
                            <li className="bestImgText"><a href="#">퓨어셀 허리에좋은 액티브 메모리폼 매트리스 침대 매트릭스 퀸 사이즈 Q</a></li>
                            
                            <li>
                                <h1>339,000원</h1>
                                <s>459,000원</s>
                            </li>
                        </ul>
                        
                        <ul className="bestImg">
                            <li><a href="#"><img src="images/tkfka2.PNG" alt=""/>
                                <div className="listDecoBox">69%</div>
                            </a></li>
                            
                            <li className="bestImgText"><a href="#">퓨어셀 3단 접이식 매트리스 바닥 토퍼 접는 단단한 허리에좋은 1인용 디스크 매트릭스 싱글</a></li>
                            
                            <li>
                                <h1>169,000원</h1>
                                <s>549,000원</s>
                            </li>
                        </ul>
                    
                        <ul className="bestImg">
                            <li><a href="#"><img src="images/tkfka3.PNG" alt=""/>
                                <div className="listDecoBox">20%</div>
                            </a></li>
                            
                            <li className="bestImgText"><a href="#">퓨어셀 녹물제거 필터 샤워기 1년세트</a></li>
                            
                            <li>
                                <h1>31,900원</h1>
                                <s>39,900원</s>
                            </li>
                        </ul>
                    
                    </div>

                </div>
    
                <div className="main_banner">
                    <img src="images/6d0a79c5d90827e990ce9a085295ae07.jpg" alt=""/>
                </div>
            
                <div id="main_rec">

                    <div className="recSet">

                        <div className="recLeft">

                            <div>
                                <a href="">
                                    <img className="recLeftMain" src="images/product_pick_01.jpg" alt=""/>
                                    <img className="recLeftTop" src="images/Untitled-2.gif" alt=""/>
                                </a>
                            </div>
                            
                        </div>

                        <div className="recRight">

                            <div className="recRightImgBox">

                                <div>
                                    <a href="#">
                                        <img src="images/recimg1.PNG" alt=""/>
                                        <div className="listDecoBox">26%</div>
                                    </a>
                                </div>

                                <div className="recRightText">
                                    <a href="#">퓨어셀 시그니처 상부장 부착식 물빠짐 식기건조대 싱크대 그릇 설거지 정리대</a>
                                    <h1>62,900원</h1>
                                    <s>84,900원</s>
                                    <div>
                                        <img src="images/ic_buy_btn.png" alt=""/>
                                    </div>
                                </div>

                            </div>

                            <div className="recRightImgBox">
                                <div>
                                    <a href="">
                                        <img src="images/recimg2.PNG" alt=""/>
                                        <div className="listDecoBox">26%</div>
                                    </a>
                                </div>

                                <div className="recRightText">
                                    <a href="#">관심상품 등록 전 장바구니 담기
                                        퓨어셀 허리에좋은 액티브 메모리폼 매트리스 침대 매트릭스 퀸 사이즈 Q</a>
                                    <h1>339,000원</h1>
                                    <s>459,000원</s>
                                    <div>
                                        <img src="images/ic_buy_btn.png" alt=""/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            
                <div id="main_new">

                    <h1>NEW PRODUCT</h1>

                    <div className="newList">

                        <ul className="newImg">
                            <li><a href="#"><img src="images/new1.PNG" alt=""/>
                                <div className="listDecoBox">26%</div>
                            </a></li>

                            <li className="newImgText"><a href="#">퓨어셀 시그니처 상부장 부착식 물빠짐 식기건조대 싱크대 그릇 설거지 정리대</a></li>
                            
                            <li>
                                <h1>62,900원</h1>
                                <s>84,900원</s>
                            </li>
                        </ul>

                        <ul className="newImg">
                            <li><a href="#"><img src="images/new2.PNG" alt=""/>
                                <div className="listDecoBox">31%</div>
                            </a></li>

                            <li className="newImgText"><a href="#">퓨어셀 칼자국 칼집 안나는 항균 TPU 안심 이유식 도마</a></li>
                            
                            <li>
                                <h1>15,900원</h1>
                                <s>22,900원</s>
                            </li>
                        </ul>

                        <ul className="newImg">
                            <li><a href="#"><img src="images/new3.PNG" alt=""/>
                                <div className="listDecoBox">31%</div>
                            </a></li>

                            <li className="newImgText"><a href="#">퓨어셀 녹슬지 않는 자동배수 깔끔 식기건조대</a></li>
                            
                            <li>
                                <h1>31,900원</h1>
                                <s>45,900원</s>
                            </li>
                        </ul>

                    </div>

                </div>
                
                <div id="main_review">

                    <div className="reviewTop">
                        <h1>REVIEW</h1>
                        <div>
                            <a href="#">MORE</a>
                            <img src="images/svg/btn_more.svg" alt=""/>
                        </div>
                    </div>

                    <div className="reviewSec">

                        <div className="reviewPart">

                            <div><a href="#"><img src="images/img_no_img01.jpg" alt=""/></a></div>

                            <div className="reviewTxt">
                                <h3>퓨어셀 모달 워셔블 사계절 경추 베개</h3>

                                <p>
                                    베개 강추합니다~<br/>
                                    말랑말랑하니 아주 부드럽게 기분좋구요.
                                </p>

                                <div className="reviewTxtImg">
                                    <a href="#"><img src="images/rev1.jpg" alt=""/></a>
                                    <p>유****</p>
                                    <img src="images/ic_star5.png" alt=""/>
                                </div>

                            </div>

                        </div>

                        <div className="reviewPart">
                            <div><a href="#"><img src="images/ec83950ba38f370946dfd0ab675f384c.jpg" alt=""/></a></div>
                            
                            <div className="reviewTxt">
                                <h3>퓨어셀 녹물제거 세면대 필터 헤드 1년세트</h3>

                                <p>
                                    세면대에서 계속 철가루 같은게<br/> 나와서 찝찝하던 차에 
                                    추천받아서 구매해봤습니다,
                                </p>

                                <div className="reviewTxtImg">
                                        <a href="#"><img src="images/rev2.jpg" alt=""/></a>
                                        <p>김****</p>
                                        <img src="images/ic_star4.png" alt=""/>
                                </div>
                            </div>
                            
                        </div>

                        <div className="reviewPart">
                            <div><a href="#"><img src="images/3eb6fb019559a40a71b43ffeed6713e4.jpg" alt=""/></a></div>
                            
                            <div className="reviewTxt">
                                <h3>퓨어셀 녹물제거 주방 헤드 기본세트_핸디형</h3>

                                <p>
                                    사용하기 매우 편하네요. <br/>
                                    디자인도 마음에 들구요~
                                    물 수압도 강해진거 같아서 만족하며 쓰고 있습니다!
                                </p>

                                <div className="reviewTxtImg">
                                        <a href="#"><img src="images/rev3.png" alt=""/></a>
                                        <p>주****</p>
                                    <img src="images/ic_star4.png" alt=""/>
                                </div>

                            </div>

                        </div>

                        <div className="reviewPart">
                            
                            <div><a href="#"><img src="images/520cd41fb28bd96578f9c28ca125b0ce.jpg" alt=""/></a></div>
                        
                            <div className="reviewTxt">

                                <h3>퓨어셀 모달 워셔블 사계절 경추 베개</h3>

                                <p>
                                    베개가 배송받을때는 딱딱하더니 <br/> 안내문대로 금새 말랑말랑해지네요~
        
                                    적당한 높이하고 받쳐주는 느낌 아주 원하는 느낌이에요
        
                                    잘사용해보겠습니다~
                                </p>

                                <div className="reviewTxtImg">
                                    <a href="#"><img src="images/rev1.jpg" alt=""/></a>
                                    <p>Y****</p>
                                    <img src="images/ic_star5.png" alt=""/>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    );
}

export default Main;