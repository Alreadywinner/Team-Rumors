import React from 'react';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';
import { homeObjFour, homeObjOne, homeObjThree , homeObjTwo } from './Data';
const Home = () => {
    return(
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services />
        <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home;