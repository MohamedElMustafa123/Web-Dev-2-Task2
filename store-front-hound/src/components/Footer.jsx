// Footer component for website, containing the brand name and social media icons. 
function Footer(){
    return(
        <footer>
            <div className="footer_container">
                <a className="footer_brand" href="#">HOUND</a>
                <ul className="socials">
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p>&copy; 2024 Hound</p>

        </footer>
    );
}

export default Footer