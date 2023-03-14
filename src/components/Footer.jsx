import React from 'react';

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