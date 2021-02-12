import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
           <div className="contactContent">
            <div className="header"></div>
            <div className="contactBox"></div>
             <h1>Contactez-moi</h1>
             <ul>
                 <li>
                     <i className="fas fa-map-marker-alt"></i>
                     <span>Genève | Paris</span>
                 </li>
                 <li>
                     <i className="fas fa-mobile-alt"></i>
                     <CopyToClipboard text="+33(0)695324688">
                         <span 
                         className="clickInput"
                         onClick={() => { alert('Téléphone copié !');}}
                         
                         >+33 (0)6 95 32 46 88</span>
                     </CopyToClipboard>
                 </li>
                 <li>
                     <i className="far fa-envelope"></i>
                     <CopyToClipboard text="vladime@gmail.com">
                         <span 
                         className="clickInput"
                         onClick={() => { alert('E-Mail copié !');}}
                         
                         >vladime@gmail.com</span>
                     </CopyToClipboard>
                 </li>
             </ul>
             <div className="socialNetwork">
                 <ul>
                     <a href="https://www.linkedin.com/in/vladimir-legay/" target="_blank" rel="noopener noreferrer">
                         <h4>LinkedIn</h4>
                         <i className="fab fa-linkedin"></i>
                     </a>
                     <a href="https://github.com/vladime88" target="_blank" rel="noopener noreferrer">
                         <h4>GitHub</h4>
                         <i className="fab fa-github"></i>
                     </a>
                     <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
                         <h4>CodePen</h4>
                         <i className="fab fa-codepen"></i>
                     </a>
                     <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noopener noreferrer">
                         <h4>Instagram</h4>
                         <i className="fab fa-instagram"></i>
                     </a>

                 </ul>
             </div>
               
           </div>
        </div>
    );
};

export default Contact;