import React from "react";
import "./style.css";

function toggleFullscreen() {
  const elem = document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    };
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    };
  };
};

console.log(document.querySelector('#ellipse').getTotalLength());

const App = function() {
  return (
    <div id="root" onclick="toggleFullscreen()">
      <svg width="200" height="200">
        <g id="#ellipse">
          <ellipse 
            cx="100" 
            cy="100" 
            rx="160" 
            ry="60" 
            id="#ellipse"
          />
          <ellipse 
            cx="100" 
            cy="100" 
            rx="160" 
            ry="60" 
            transform="rotate(60, 100, 100)"
            id="#ellipse"
          />
          <ellipse 
            cx="100" 
            cy="100" 
            rx="160" 
            ry="60" 
            transform="rotate(120, 100, 100)" 
            id="#ellipse"
          />
          <circle 
            cx="100" 
            cy="100" 
            r="30" 
            id="#ellipse"
          />
         </g>
      </svg>
    </div>
  );
};

export default App;
