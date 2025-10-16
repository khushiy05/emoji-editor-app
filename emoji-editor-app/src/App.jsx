import React from 'react';
import './App.css';
import { useState } from 'react';
import EmojiButton from './EmojiButton/EmojiButton';

function App() {
  const [emoji, setEmoji]= useState("😜");
  const [sliderValue, setSliderValue] = useState(50);

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

      <div className='emoji-container'>{emoji}</div>

      <div className='slider-container'>
        {sliderValue}
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
      </div>
    </div>
    </div>
  );
}





export default App;

