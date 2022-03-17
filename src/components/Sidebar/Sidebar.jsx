import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CallIcon from '@mui/icons-material/Call';
import { useAuth, Logout } from '../Auth/Auth.ts'
import './Sidebar.css'

const Sidebar = () => {
    const user = useAuth()
    const email = user?.email 
    const ADMIN = process.env.REACT_APP_ADMIN
    return (
        <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger" >
                <MenuIcon className='burger-menu'/>
            </a>

            <nav className="s-sidebar__nav">
                <ul>
                    <li>
                    <Link to='/' className="s-sidebar__nav-link">
                        <HomeIcon className='link-icon'/><em>Home</em>
                    </Link>
                    </li>
                    <li>
                    <Link to="/products" className="s-sidebar__nav-link" >
                        <DirectionsCarIcon className='link-icon'/><em>Cars</em>
                    </Link>
                    </li>
                    <li>
                    <Link to="/cart" className="s-sidebar__nav-link">
                        <ShoppingCartIcon className='link-icon'/><em>Cart</em>
                    </Link>
                    </li>
                    { email === ADMIN ? (
                        <li>
                        <Link to="/admin" className="s-sidebar__nav-link">
                            <AddCircleOutlineSharpIcon className='link-icon'/><em>Add Car</em>
                        </Link>
                        </li>
                    ):null }
                    <li>
                    <Link to="/contacts" className="s-sidebar__nav-link" >
                        <CallIcon className='link-icon'/><em>Contact Us</em>
                    </Link>
                    </li>
                    <li>
                    <Link to="/aboutus" className="s-sidebar__nav-link" >
                        <PeopleIcon className='link-icon'/><em>About Us</em>
                    </Link>
                    </li>
                    { email ? 
                        (
                            <li>
                                <Link to="/" onClick={Logout} className="s-sidebar__nav-link" >
                                    <LogoutSharpIcon className='link-icon'/><em>Log Out</em>
                                </Link>
                            </li>
                        ):
                        (
                            <li>
                                <Link to="/auth" className="s-sidebar__nav-link" >
                                    <ManageAccountsSharpIcon className='link-icon'/><em>Login</em>
                                </Link>
                            </li>
                        )
                    }                   
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;