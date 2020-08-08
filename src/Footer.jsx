import React from 'react'; 
const Footer = () =>{
    const currdate = new Date().getFullYear();
    return <>
    <p>copyright © {currdate} </p>
    </>;
} ;
export default Footer;