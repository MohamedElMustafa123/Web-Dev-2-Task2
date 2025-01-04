
import React, {useEffect} from 'react';
// main component of the website, containing the main content of the website.

function Main(){
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
    
    return(
        <main>
            {/*Container for intro image and buy button*/}
            <div className="image_container">
                <img className="intro_image" src="src/assets/images/hound-intro.jpg" alt="Hound intro image"></img>
                <button className="buy_button">Buy</button>
            </div>
            {/* Heading of the banner section
            Code for this section was created following a guide from youtube.
            https://www.youtube.com/watch?v=yqaLSlPOUxM&ab_channel=LunDev*/}
            <h1 className="banner_heading heading">Be Apart Of Greatness</h1>
            {/*banner section that contains the 3d rotating image slider */}
            <div className="banner">
                <div className = "slider" style={{'--quantity': '10'}}>
                    <div className="item" style={{'--position': '1'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '2'}}><img src = "src/assets/images/model2.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '3'}}><img src = "src/assets/images/model3.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '4'}}><img src = "src/assets/images/model4.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '5'}}><img src = "src/assets/images/model5.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '6'}}><img src = "src/assets/images/model6.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '7'}}><img src = "src/assets/images/model7.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '8'}}><img src = "src/assets/images/model8.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '9'}}><img src = "src/assets/images/model9.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '10'}}><img src = "src/assets/images/model10.jpg" alt ="Model images"></img></div>
                </div>
                {/*Image that goes within the circle*/}
                <div className="content">
                    <div className="mainmodel"><img src = "src/assets/images/mainmodel.png"></img></div>
                </div>

            </div>

            {/* Buy now product seciton*/}    
            <h1 className="buy_now heading">Buy Now</h1>
            {/*Displaying products */}
            <div className="products">
                <div className="product">
                    <img src="src/assets/images/product1.jpg" alt="Product 1"></img>
                    <p className="desc">Crimson Black</p>
                    <button className="buy_now_product_button">Buy Now</button>
                </div>
                <div className="product">
                    <img src="src/assets/images/product2.png" alt="Product 1"></img>
                    <p className="desc">Charcoal Grey</p>
                    <button className="buy_now_product_button">Buy Now</button>
                </div>
                <div className="product">
                    <img src="src/assets/images/product3.png" alt="Product 1"></img>
                    <p className="desc">French Beige</p>
                    <button className="buy_now_product_button">Buy Now</button>
                </div>
            </div>

            {/*Unbound ambition section. Holds image and texts */}
            <div className="unbound">
                <div className="unbound_text">
                    <h1 className='heading'>Unbound<br/> Ambition</h1>
                    <p>On January 6th, we came together and penned the first chapter of this vision. We will stop at nothing to bring it into fruition. Witness our greatness</p>
                </div>
                <div className="unbound_image">
                    <img src="src/assets/images/unbound-image-sec.jpg" alt="brand image"></img>
                </div>
            </div>

            
        </main>
    );

}

export default Main;