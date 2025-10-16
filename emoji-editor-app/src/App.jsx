import React from 'react';
import './App.css';
import { useState } from 'react';
import EmojiButton from './EmojiButton/EmojiButton';
import ColorButton from './ColorButton/ColorButton';

function App() {
  const [emoji, setEmoji]= useState("😜");
  const [sliderValue, setSliderValue] = useState(50);
  const [bgcolor, setBGcolor] = useState("#ffffff");
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" ? (
        <div className="home-container">
          <h1 className="header">EMOTIFY</h1>
          <p className="tagline">
            "Emotify lets you create 🎨 and edit ✏️ your own emojis 😄, adjust colors 🌈 and sizes 🔢, and express yourself creatively ✨ like never before! 🚀"
          </p>
          <button className="play-button" onClick={() => setPage("game")}>
            Play Game
          </button>
        </div>
      ) : (

    
    <div className="min-h-screen w-full bg-white relative">
      {/* Pink Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      >

      <div className="emoji-container"
        style={{
    fontSize: `${sliderValue}px`,
    backgroundColor: bgcolor,
  }}
   >
  {emoji}
</div>


      <div className='slider-container'>
        <input type="range" min="0" max="100" className="slider" onChange={(e) => {setSliderValue(e.target.value) }} />
      </div>

      <div className='emoji-picker'>
        <EmojiButton emoji={"🌌"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🚀"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🌛"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🛸"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🌙"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🛰️"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"💫"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"☄️"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"👨‍🚀"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🌓"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🔭"} setEmoji={setEmoji}/>
        <EmojiButton emoji={"🌏"} setEmoji={setEmoji}/>
      </div>

      <div className='color-picker'>
        <ColorButton bgcolor={"#ffffff"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#4EF5A0"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#FF47C4"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#3EC8FF"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#FFEC3E"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#B54BFF"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#FF6F61"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#00E1C6"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#FF8C42"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#C9F3FF"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#CFFFE0"} setBGcolor={setBGcolor}/>
        <ColorButton bgcolor={"#D11A76"} setBGcolor={setBGcolor}/>
      </div>
    </div>
    
    <footer className="footer">
        <p>
          Made with <span className="heart">💖</span> by{" "}
          <span className="name">Khushi</span> | © 2025{" "}
          <span className="brand">Emotify</span> 🌸✨
        </p>

        {page === "game" && (
         <button className="home-footer-button"
      onClick={() => setPage("home")}
    >Go to Home
    </button>
  )}
      </footer>
    </div>
      )}
      </>
  );
}





export default App;

