function Main(){
    return(
        <main>
            <div className="image_container">
                <img className="intro_image" src="src/assets/images/hound-intro.jpg" alt="Hound intro image"></img>
                <button className="buy_button">Buy</button>
            </div>

            <div className="banner">
                <div className = "slider" style={{'--quantity': '10'}}>
                    <div className="item" style={{'--position': '1'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '2'}}><img src = "src/assets/images/model2.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '3'}}><img src = "src/assets/images/model3.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '4'}}><img src = "src/assets/images/model4.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '5'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '6'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '7'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '8'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '9'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                    <div className="item" style={{'--position': '10'}}><img src = "src/assets/images/model1.jpg" alt ="Model images"></img></div>
                </div>
                <div className="content">
                    <div className="mainmodel"><img src = "src/assets/images/mainmodel.png"></img></div>
                </div>

            </div>

            <div>
                <h1>Be Apart Of Greatness</h1>
                <img src="" alt="Product 1"></img>
                <img src="" alt="Product 2"></img>
                <img src="" alt="Product 3"></img>

            </div>

            <div>
                <h1>Unbound Ambition</h1>
                <p>On January 6th, we came together and penned the first chapter of this vision. We will stop at nothing to bring it into fruition. Witness our greatness</p>
                <img src="" alt="Brand image"></img>
            </div>

            
        </main>
    );

}

export default Main