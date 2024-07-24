function BodyMenuBoxComponent(props){


    return (
        <div id="left_menu_box">
            <span className="left_menu_title">{props.menuData.title}</span>
            <ul>
                {props.menuData.subMenu.map(item=>(<li className="left_menu"><a href="#">{item}</a></li>))}
            </ul>
        </div>
    );
}

export default BodyMenuBoxComponent;