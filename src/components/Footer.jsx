import React from 'react';
import '../styles/Footer-styles.css';

const date = new Date();
const fullYear = date.getFullYear().toString();

function Footer(){
    return(
        <footer>
            <p>Copyright Lucas Aveiro - {fullYear}</p>
        </footer>
    )
};

export default Footer;