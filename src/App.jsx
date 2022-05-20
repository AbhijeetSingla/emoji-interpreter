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
  const [convertedOutputWithMsg, setConvertedOutputWithMsg] = useState(" ");
  const [buttonText, setButtonText] = useState("Get Translation");

  function updateTextInput(event) {
    setTextInput(event.target.value);
  }

  function bestMatchInObject (object, searchString) {
    const searchStringArray = searchString.split(/[\s-]+/).filter((element) => element !== '').map((element) => element = element.trim().replace(":", ""));
    const searchStringRegExp = new RegExp(`\\s?((${searchStringArray.join(")|(")})){1}.+((${searchStringArray.join(")|(")})){1}`, "gi");
    const fallbackSearchStringRegExp = new RegExp(`\\s?((${searchStringArray.join(")|(")})){1,${searchStringArray.length + 1}}`, "gi");
    const keyArray = Object.keys(object);
    const valueArray = Object.values(object);
    
    if (searchStringArray.length > 1) {
      const matchCount = keyArray.map(element => {
        const wordsMatchedArray = object[element].match(searchStringRegExp);
        const wordsMatchedArrayLength = wordsMatchedArray ? wordsMatchedArray.toString().trim().replace(":", "").split(",").map(element => element.trim()).length : 0;
        return wordsMatchedArrayLength;
      });
      const diffArray = matchCount.map((element, index) => element - valueArray[index]
                                                                         .split(/[\s-]+/)
                                                                         .filter((element) => element !== '')
                                                                         .map((element) => element = element.trim().replace(":", "")).length
                                    );
      return `${Math.max(...diffArray)}` ? keyArray[diffArray.indexOf(Math.max(...diffArray))] : "Sorry, couldn't find what you are looking for :(";
    } else {
      const matchCount = keyArray.map(element => {
        const wordsMatchedArray = object[element].match(fallbackSearchStringRegExp);
        const wordsMatchedArrayLength = wordsMatchedArray ? wordsMatchedArray.toString().trim().replace(":", "").split(",").map(element => element.trim()).length : 0 ;
        return wordsMatchedArrayLength;
      });
      const diffArray = matchCount.map((element, index) => element - valueArray[index]
                                                                      .split(/[\s-]+/)
                                                                      .filter((element) => element !== '')
                                                                      .map((element) => element = element.trim().replace(":", "")).length
                                );
      return `${Math.max(...diffArray)}` ? keyArray[diffArray.indexOf(Math.max(...diffArray))] : "Sorry, couldn't find what you are looking for :(";
    }
  }
  
  async function getInterpretation (object, str) {
    setButtonText(null);
    setConvertedOutputWithMsg("*crickets chirping...");
    const interpretation = object[str.trim()]? object[str.trim()] : await Promise.resolve(bestMatchInObject(object, str));
    setButtonText("Get Translation");
    setConvertedOutputWithMsg(interpretation);
  }

  return (
    <div>
      <div className="container-center section-base center-text">
        <p>It interprets an emoji through internal data base which contains <strong>almost</strong> every emoji (•_•)</p>
        <small>Check it out!</small>
      </div>
      <div className='container-center section-offwhite'>
        <div>
          <textarea name="Enter Emoji" onChange={updateTextInput} id="textinput" placeholder='Please enter the emoji here, also, if you want to search for emoji, then enter the description of that emoji'></textarea>
        </div>
        <div className='flex' id='generatebuttondiv'>
          <button className='primary-button' id='buttonID' onClick={() => {getInterpretation(emojiList, textInput)}}>{buttonText}</button>
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
