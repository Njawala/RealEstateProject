//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Content from './Content'
//import ExploreHome from './ExploreHome'
import Login from './Login'
import Register from './Register'
//import Property from './Property'
import Footer from './Footer'


      function App() {
        return (
          <div className="App">
           
              <BrowserRouter>
              <Header />
                <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/login' component={Login} />
                      <Route path='/register' component={Register} />
                 </Switch>   
              </BrowserRouter>

              <Content />  
       
            
              <div className='ExContent'> 
         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius:'20px', height:'250px' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Explore The Best Sellings</h1>
              <h5 className='mb-6'>Take your time and browse different appartments of your choice</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                Link href='/sell'
                role='button'
                rel='nofollow'
                //target='_blank'
              >
                Explore Houses
              </a>
              </div>
             
              </div>
              </div>
        </div>
           
        
           
            {/*<ExploreHome />*/}
            <Footer />
            </div>
    
        );
      }
      

export default App;
