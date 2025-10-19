let audiotest = new Audio('./audio/1 star review.m4a');
let A = new Audio('./audio/Processed/A.m4a');
let B = new Audio('./audio/B.m4a');
let C = new Audio('./audio/C.m4a');
A.preload = 'auto';
B.preload = 'auto';
C.preload = 'auto';
audiotest.preload = 'auto';
let duration = NaN; // set duration to NaN so it can be called later
function setDuration(){
    duration = audiotest.duration;
    duration = Math.floor(duration * 1000); // convert to milliseconds
    }
audiotest.addEventListener('loadedmetadata', setDuration, { once: true }); // Loads duration once metadata is loaded

document.body.addEventListener("click", function () {
    audiotest.play();
    /*let loopCount = 6;
    function wampWamp() {
        if (loopCount > 0) {
            audio.play();
            console.log(loopCount);
            loopCount -= 1;
            console.log(loopCount);
            setTimeout(wampWamp(), duration + 20 /* extra 20ms buffer *//*);   
            
        }
    }     
  
    wampWamp();*/
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'a' || event.key === 'A') {
    A.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'b' || event.key === 'B') {
    B.play()
    console.log("The 'b' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'c' || event.key === 'C') {
    C.play()
    console.log("The 'c' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'd' || event.key === 'D') {
    console.log("The 'd' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'e' || event.key === 'E') {
    console.log("The 'e' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'f' || event.key === 'F') {
    console.log("The 'f' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'g' || event.key === 'G') {
    console.log("The 'g' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'h' || event.key === 'H') {
    console.log("The 'h' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'i' || event.key === 'I') {
    console.log("The 'i' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'j' || event.key === 'J') {
    console.log("The 'j' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'k' || event.key === 'K') {
    console.log("The 'k' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'l' || event.key === 'L') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'm' || event.key === 'M') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'n' || event.key === 'N') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'o' || event.key === 'O') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'p' || event.key === 'P') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'q' || event.key === 'Q') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'r' || event.key === 'R') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 's' || event.key === 'S') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 't' || event.key === 'T') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'u' || event.key === 'U') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'v' || event.key === 'V') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'w' || event.key === 'W') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'x' || event.key === 'X') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'y' || event.key === 'Y') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'z' || event.key === 'Z') {
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
