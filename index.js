window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");   // selects anything with sound class
  const pads = document.querySelectorAll(".pads div");  // takes all the pads1-6
  const visual = document.querySelector('.visual');
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
  ];

  pads.forEach((pad, index)=>{
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0;      // allow repetitive hits on each sound
        sounds[index].play();

        createBubbles(index);
    });
  });

  // create a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationed', function(){
      visual.removeChild(this);
    });
  };
});
