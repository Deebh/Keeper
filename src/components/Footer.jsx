import React from "react";
function Footer(){
    const year = new Date().getFullYear();
    return (
     <footer>
    <p>Made with ♥️ to Keep your stuffs! </p>
    <p>©{year}</p> 
    </footer>
    );


}
export default Footer;