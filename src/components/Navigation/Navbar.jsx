import { useState } from 'react';
import logo from '../../assets/logo.png';
import NavList from './NavList';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="container flex justify-between items-center gap-5 py-5">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='hidden md:inline-block'>
                    <NavList />
                </div>
                <div className='inline-block md:hidden'>
                    <button onClick={() => setOpen(!open)} className='text-xl'><FaBars /></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;