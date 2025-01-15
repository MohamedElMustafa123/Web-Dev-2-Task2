import React, { useEffect } from 'react';
// main component of the website, containing the main content of the website.

// Import images
import houndIntro from '../assets/images/hound-intro.jpg';  // Adjusted path
import model1 from '../assets/images/model1.jpg';
import model2 from '../assets/images/model2.jpg';
import model3 from '../assets/images/model3.jpg';
import model4 from '../assets/images/model4.jpg';
import model5 from '../assets/images/model5.jpg';
import model6 from '../assets/images/model6.jpg';
import model7 from '../assets/images/model7.jpg';
import model8 from '../assets/images/model8.jpg';
import model9 from '../assets/images/model9.jpg';
import model10 from '../assets/images/model10.jpg';
import mainModel from '../assets/images/mainmodel.png';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import unboundImageSec from '../assets/images/unbound-image-sec.jpg';

function Main() {
    // Function to observe the headings and add the 'visible' class when the heading is in the viewport
    const observeHeadings = () => {
        // Create a new IntersectionObserver
        const observer = new IntersectionObserver((entries, observer) => {
            // Loop through the entries
            entries.forEach(entry => {
                // If the entry is in the viewport, add the 'visible' class and unobserve the element
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Select all the headings and observe each heading
        document.querySelectorAll('.heading').forEach(heading => {
            observer.observe(heading);
        });
    };

    // UseEffect hook to run the observeHeadings function when the component mounts
    useEffect(() => {
        observeHeadings();  // Call the function to observe the headings
    }, []);  // Empty dependency array to run only once when the component mounts

    return (
        <main>
            {/* Container for intro image and buy button */}
            <div className="image_container">
                <img className="intro_image" src={houndIntro} alt="Hound intro image" />
                <button className="buy_button">Buy</button>
            </div>

            {/* Heading of the banner section
            Code for this section was created following a guide from youtube.
            https://www.youtube.com/watch?v=yqaLSlPOUxM&ab_channel=LunDev*/}
            <h1 className="banner_heading heading">Be Apart Of Greatness</h1>

            {/* banner section that contains the 3d rotating image slider */}
            <div className="banner">
                <div className="slider" style={{ '--quantity': '10' }}>
                    <div className="item" style={{ '--position': '1' }}><img src={model1} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '2' }}><img src={model2} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '3' }}><img src={model3} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '4' }}><img src={model4} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '5' }}><img src={model5} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '6' }}><img src={model6} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '7' }}><img src={model7} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '8' }}><img src={model8} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '9' }}><img src={model9} alt="Model image" /></div>
                    <div className="item" style={{ '--position': '10' }}><img src={model10} alt="Model image" /></div>
                </div>

                {/* Image that goes within the circle */}
                <div className="content">
                    <div className="mainmodel"><img src={mainModel} alt="Main model" /></div>
                </div>
            </div>

            {/* Buy now product section */}
            <h1 className="buy_now heading">Buy Now</h1>
            {/* Displaying products */}
            <div className="products">
                <div className="product">
                    <img src={product1} alt="Product 1" />
                    <p className="desc">Crimson Black</p>
                    <button className="buy_now_product_button">Buy Now</button>
                </div>
                <div className="product">
                    <img src={product2} alt="Product 2" />
                    <p className="desc">Charcoal Grey</p>
                    <button className="buy_now_product_button">Buy Now</button>
                </div>
                <div className="product">
                    <img src={product3} alt="Product 3" />
                    <p className="desc">French Beige</p>
                    <button className="buy_now_product_button">Buy Now</button>
                </div>
            </div>

            {/* Unbound ambition section. Holds image and texts */}
            <div className="unbound">
                <div className="unbound_text">
                    <h1 className="heading">Unbound<br /> Ambition</h1>
                    <p>On January 6th, we came together and penned the first chapter of this vision. We will stop at nothing to bring it into fruition. Witness our greatness</p>
                </div>
                <div className="unbound_image">
                    <img src={unboundImageSec} alt="Brand image" />
                </div>
            </div>
        </main>
    );
}

export default Main;
