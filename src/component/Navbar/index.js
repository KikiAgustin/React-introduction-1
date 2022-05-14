import shoppingIcon from '../../assets/shopping-icon.svg';
import Style from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={Style.nav} >
            <img className={Style.navIcon} src={shoppingIcon} alt="Shopping Icon" />
            <h1 className={Style.navTitle} >Shopping List</h1>
        </nav>
    )
}

export default Navbar