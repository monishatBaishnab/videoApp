import logo from '../../assets/logo.png';
import NavList from './NavList';
const Navbar = () => {
    return (
        <div>
            <div className="container flex justify-between items-center gap-5 py-5">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <NavList />
                </div>
            </div>
        </div>
    );
};

export default Navbar;