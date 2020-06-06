import React from 'react';

import Navbar from '../../component/navbar/navbar'

import './home.css';
import Flag from '../../utils/images/ukflag.png';
import Logo from '../../utils/images/WSM new LOGO 2020.png';


const Home = () => {

    return (
<>
<header>	
<img id='wsmlogo' alt='WSM' className='center' src={Logo}/>
</header>
<div className='center' id='tzloc'>
    <img id="flag" src={Flag} alt="Time Zone" className="center"/>
        <p id="city">LDN</p>
        <p id="date_time"/>
 </div>
 <h1>Home</h1>
<Navbar/>
<footer>
    <a href=" "><p id="saturn">HELLO</p></a> 
</footer>
</>
    )
}

export default Home;
