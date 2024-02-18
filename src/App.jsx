import React from 'react'
import CustomCards from './components/CustomCards/CustomCards'
import MainPage from './components/MainPage/MainPage'
import CarouselCard from './components/CarouselCard/CarouselCard'


const App = () => {
  return (
    <div>
      <MainPage/>
      <div style={{display:"flex", justifyContent:"center",marginBottom:"5%"}}>
  
      
      <CustomCards icon = "https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg" title="Search" des="We strictly only deal with vendors that provide top notch security."/>
      <CustomCards icon = "https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg" title="24/7 Support" des="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
      <CustomCards icon="https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg" title="Customizable" des="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
      </div>
      <CarouselCard/>
      </div>
    
  )
}

export default App