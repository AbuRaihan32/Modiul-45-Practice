import { NavLink } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="bg-lime-700 p-8">
            <ul className='flex gap-10 justify-center text-white font-bold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </ul>
        </div>
    );
};

export default NavBar;