import React from 'react';
import './App.css';

function App() {
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
      
      <p className="tagline">
        ✨ Create. Edit. Express. Design your own emojis and bring your emotions
        to life with Emotify 🎨
      </p>
    </div>
    </div>
  );
}

export default App;

