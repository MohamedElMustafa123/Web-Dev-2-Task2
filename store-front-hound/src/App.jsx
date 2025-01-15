//importing all components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

//importing routing components from react-router-dom to be able to navigate between pages
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return(
    //all components are within the BrowserRouter component to enable routing
    <BrowserRouter>
      <Routes>
        
        {/*Route for signup page */}
        <Route path='/register' element={<Signup/>}></Route>

        {/*Route for login page */}
        <Route path='/login' element={<Login/>}></Route>

        {/*Route for home page */}
        <Route path='/' element ={
          <>
            <Header/> {/*Header component */}
            <Main/>{/*Main component */}
            <Footer/>{/*Footer component */}
          </>
        } />

      </Routes>
    </BrowserRouter>
  );


}

export default App