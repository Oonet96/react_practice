import './styles/BodyContent.css';

const articles = [
    {img:'_images/album_01.jpg',date:'작성일자 : 2015-12-27',views:'조회수 : 51',content:'비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.'},
    {img:'_images/album_02.jpg',date:'작성일자 : 2015-12-28',views:'조회수 : 251',content:'비가 와도 눈이 와도 걱정이야 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.'},
    {img:'_images/album_03.jpg',date:'작성일자 : 2015-12-31',views:'조회수 : 151',content:'모든게 걱정이야 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.'}
]

function BodyContentComponent(){

    return(
        <div id="contentsZone">
            <div className="contents_title">특별함</div>
            <div id="article" className="contents">
                <h3>사계절 낭만이 있는 곳에서 행복한 추억을 많이 만들어 가세요</h3>
                <table className="album" border="0" style={{width: '100%'}}>
                    {articles.map((item,index)=>(
                        <tr key={index}>
                            <td>
                                <a href="#">
                                    <img src={item.img} width="160" alt=""/>
                                </a>
                            </td>
                            <td>
                                <a href="#">
                                    {item.content}
                                    <div align="right">[<font style={{color:'#878787', fontSize:'12px'}}>{item.date}</font>, <font style={{color:'#878787', fontSize:'12px'}}>{item.views}</font>]</div>                         
                                </a>
                            </td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>
                            <a href="#">
                                <img src="_images/album_01.jpg" width="160" alt=""/>
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                                <div align="right">[<font style={{color:'#878787', fontSize:'12px'}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787', fontSize:'12px'}}>조회수 : 51</font>]</div>                         
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#">
                                <img src="_images/album_01.jpg" width="160" alt=""/>
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                                <div align="right">[<font style={{color:'#878787', fontSize:'12px'}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787', fontSize:'12px'}}>조회수 : 51</font>]</div>                         
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#">
                                <img src="_images/album_01.jpg" width="160" alt=""/>
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                                <div align="right">[<font style={{color:'#878787', fontSize:'12px'}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787', fontSize:'12px'}}>조회수 : 51</font>]</div>                         
                            </a>
                        </td>
                    </tr> */}
                </table>
            </div>
        </div>
    );
}

export default BodyContentComponent;