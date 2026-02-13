import { useState } from "react";
import heart from "./assets/pixel-heart.gif";
import kitty from "./assets/kitty.gif"

function Vdate() {
  const [noPosition, setNoPosition] = useState(null);
  const [yesSize, setYesSize] = useState(1);
  const [tries, setTries] = useState(0);
  const [showNo, setShowNo] = useState(true);
  const [yesClicked, setYesClicked] = useState(false); 

  const handleNoHover = () => {
    if (tries >= 20) {
      setShowNo(false); 
      return;
    }

    const buttonWidth = 80; 
    const buttonHeight = 80; 

   
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

   
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoPosition({ x: randomX, y: randomY });
    setYesSize(prev => prev + 0.2);
    setTries(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true); 
  };

  return (
    <div className="container">
      {!yesClicked ? (
        <>
          <h4>Will you be my valentine?</h4>
          <img className="heart" src={heart} alt="heart" />

          <button
            className="yes"
            onClick={handleYesClick}
            style={{ transform: `scale(${yesSize})`, transition: "transform 0.2s ease" }}
          >
            Yes
          </button>

          {showNo && (
            <button
              className="no"
              onMouseEnter={handleNoHover}
              style={
                noPosition
                  ? {
                      position: "fixed", 
                      left: noPosition.x,
                      top: noPosition.y,
                      transition: "0.2s ease",
                    }
                  : {}
              }
            >
              No
            </button>
          )}
        </>
      ) : (
        <div className="answer">
          <h2>Yay! 🎊</h2>
          <h2> You said yes!!! 💖</h2>
          <img className="kitty" src={kitty} alt="kitty" />
          <p>Valentine Date:Enzo's at 7PM</p>
        </div>
      )}
    </div>
  );
}

export default Vdate;

