import React , { useState } from 'react';
import './App.css';
import Home from './component/OnePageSite/components/Home';
import About from './component/OnePageSite/components/About';
import Contact from './component/OnePageSite/components/Contact';
import Header from './component/OnePageSite/components/Header';
import Footer from './component/OnePageSite/components/Footer';
import Services from  './component/OnePageSite/components/Services'
import PageNotFound from './component/OnePageSite/components/PageNotFound';
import {Route, Routes , useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let location = useLocation();
  console.log(location);
  const [progress, setProgress] = useState(0)


  return (
  <>
  <Header/>
  <LoadingBar color="#f11946" height="5px" progress={progress} onLoaderFinished={() => setProgress(0)}/>
  {/* {location.pathname === "/" && <Header/>}  */}
    <Routes>
      <Route exact path='/' element={<Home onLoaderFinished={() => setProgress(100)} />}/>
      <Route exact path='/about' element={<About  />}/>
      <Route exact path='/services' element={<Services  />}/>
      <Route exact path='/contact' element={<Contact  />}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
   
  {/* {location.pathname === "*" && <Footer/>} */}
  <Footer/>

  </>
  ) 
}

export default App;
