
import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';


import Footer from './components/Footer';
import Main from './components/Main'




      
function App() {
  const name = "Kipkorir Victor Peace";
  const date = "2023";


  return (
   <div className= "App">
     <div>
      <Navbar/>
      {/* <h1>Welcome To My Blog Website!</h1> */}
      <Title title="My Tech Journey" />
      {/* Rest of your app content */}
      
      <Main/>
    
      {/* Rest of your app content */}
    </div>
      {/* Rest of your app content */}
      <Footer name={name} date={date} />

   </div>
   
  );
}


export default App
