// Header component of the website, containing the navigation bar, logo, and location.

import logo from '../assets/images/hound-logo.png';
function Header() {
    return (
        <header>
            {/* nav bar*/}
            <nav className="navbar">
                <div className="navbar_left">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="navbar_center">
                    <img className="navbar_logo" src={logo} alt="Hound logo"/>
                </div>
                <div className="navbar_right">
                    <span>United Arab Emirates | AED</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
