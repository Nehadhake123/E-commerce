import React, { useContext } from "react";
import HeroSection from "../component/HeroSection";

export const About =()=>{
    const data ={
        name: "TechMart Store"
        
    }
    return <HeroSection myData={data}></HeroSection>
}