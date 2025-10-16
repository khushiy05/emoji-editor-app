import React from 'react';
import './App.css';
import { useState } from 'react';
import EmojiButton from './EmojiButton/EmojiButton';
import ColorButton from './ColorButton/ColorButton';

function App() {
  const [emoji, setEmoji]= useState("😜");
  const [sliderValue, setSliderValue] = useState(50);
  const [bgcolor, setBGcolor] = useState("#ffffff");

  return (
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

      <h1 className="header">EMOTIFY</h1>

      <h3 className="tagline">
        ✨ Create. Edit. Express. Design your own emojis and bring your emotions
        to life with Emotify 🎨
      </h3>

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
    </div>
  );
}





export default App;

