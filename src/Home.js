import React from 'react'
import { FeatureProducts } from './component/featureProducts';
import  HeroSection  from './component/HeroSection';

export const Home = () => {
  const data ={
    name:"DigitalLuxe Hub",
  }
  return (
    <>   
     <HeroSection myData={data}/>
    <div><FeatureProducts></FeatureProducts></div>
    </>

  )
}
