import classes from "../modules/Header.module.scss";
import layout from "../modules/Layout.module.scss"
import VectorIcon from "../assets/arrow-down-icon.svg";
import CartIcon from "../assets/cart-icon.svg";
import HeartIcon from "../assets/favorites-icon.svg";
import SearchIcon from "../assets/search-icon.svg";
import {Link} from "react-router-dom";


const Header = () => {


    return <div className={`${classes["header-wrapper"]}`}>
        <div className={classes["header-top-wrapper"]}>
            <div className={`${classes["header-top"]} ${layout["container"]}`}>
                <div className={classes["title-wrapper"]}>
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <Link to={'/'}>
                        <p className={classes["shopnow-link"]}>ShopNow</p>
                    </Link>
                </div>
                <div className={classes["language-select"]}>
                    <p>English</p>
                    <img src={VectorIcon} alt="dropdown-icon"/>
                </div>
            </div>
        </div>
        <div className={classes["header-bottom-wrapper"]}>
            <div className={`${classes["header-bottom"]} ${layout["container"]}`}>
                <Link to={'/'}>
                    <div className={classes["heading"]}>
                        <h1>Exclusive</h1>
                    </div>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contact</Link>
                        </li>
                        <li>
                            <Link to={'/'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                <div className={classes["actions-wrapper"]}>
                    <div className={classes["input-wrapper"]}>
                        <input type="text" placeholder="What are you looking for?"/>
                        <img src={SearchIcon} alt="search-icon"/>
                    </div>
                    <Link to={'/'}>
                        <img src={HeartIcon} alt="heart-icon"/>
                    </Link>
                    <Link to={'/'}>
                        <img src={CartIcon} alt="cart-icon"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>;

};

export default Header;