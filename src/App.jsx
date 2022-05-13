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
  function getInput() {
    const input = document.querySelector("#textinput").value;
    return input
  }
  let input = getInput();
  return (
    <div>
      <div className="container-center section-base center-text">
        <p>It interprets an emoji through internal data base.</p>
        <small>Check it out!</small>
      </div>
      <div className='container-center section-offwhite'>
        <div>
          <textarea name="Enter Emoji" id="textinput" cols='30' rows='10' placeholder='Please enter the emoji here, also, if you want to search for multiple emojis then separate with a ","'></textarea>
        </div>
        <div className='flex' id='generatebuttondiv'>
          <button className='primary-button' onClick={getInput}>Get Translation</button>
        </div>
        <div id='translationholder'>{emojiList[input]}</div>
      </div>
    </div>
  );
}


console.log(emojiList["9️⃣"]); //!testing porposes




export {
  Header,
  App,
  Footer
};
