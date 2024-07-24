import { Link} from 'react-router-dom';
import './styles/TopMenu.css';

function TopMenuComponent(props){

    return(
        <div id="menuZone">
            <ul className="mainmenu">
                {props.menuArr.map((item,index)=>(
                    <li>
                        <Link to={`/${item.title}`}>{item.title}</Link>
                        <ul className="submenu">
                            {item.subMenu.map((subItem,index)=>(
                                <li key={index}><Link to={`/${item.title}/${subItem}`}>{subItem}</Link></li>
                            ))}
                        </ul>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default TopMenuComponent;