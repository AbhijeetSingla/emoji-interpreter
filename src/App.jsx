import { useState } from 'react';
import './App.css';
import emojiList from './emojiList';

function Header() {
  return (
    <header className="header-base capitalize">
        <h1>Emoji Interpreter</h1>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer-base flex">
      <div className="footer-heading">Social Links</div>
      <ul className="footer-social-links list-style-none flex">
          <li><a href="https://linkedin.com/in/abhijeetsingla1553" target="_blank" rel="noopener noreferrer"><img
                      src="https://as1553-component-library.netlify.app/media/icons/linkedin.svg" alt="linkedin" width="25px" height="25px"/></a></li>
          <li><a href="https://github.com/AbhijeetSingla" target="_blank" rel="noopener noreferrer"><img src="https://as1553-component-library.netlify.app/media/icons/github.svg"
                      alt="github" width="25px" height="25px"/></a></li>
          <li><a href="mailto:abhijeetsingla1553@gmail.com"><img src="https://as1553-component-library.netlify.app/media/icons/email.svg" alt="email" width="25px"
                      height="25px"/></a></li>
      </ul>
      <p>No Copyright &#169; 2022. Made by Abhijeet Singla</p>
  </footer>
  )
}

function App() {
  
  const [textInput, setTextInput] = useState(null);
  const [textOutput, setTextOutput] = useState(null);

  function updateTextInput(event) {
    setTextInput(event.target.value);
  }
  
  function getInterpretation (object, str) {
    setTextInput(str ? str.trim() : null);
    const searchString = object[str] ? object[str] : Object.keys(object).find(key => object[key] === str);
    setTextOutput(searchString ? searchString : "Sorry, couldn't find what you are looking for :(");
  }
  
  const convertedOutputWithMsg = textOutput ? textOutput : "Output will be shown here";

  return (
    <div>
      <div className="container-center section-base center-text">
        <p>It interprets an emoji through internal data base.</p>
        <small>Check it out!</small>
      </div>
      <div className='container-center section-offwhite'>
        <div>
          <textarea name="Enter Emoji" onChange={updateTextInput} id="textinput" placeholder='Please enter the emoji here, also, if you want to search for emoji, then enter the description of that emoji'></textarea>
        </div>
        <div className='flex' id='generatebuttondiv'>
          <button className='primary-button' onClick={() => {getInterpretation(emojiList, textInput)}}>Get Translation</button>
        </div>
        <div id='translationholder'>{convertedOutputWithMsg}</div>
      </div> 
    </div>
  );
}

export {
  Header,
  App,
  Footer
};
