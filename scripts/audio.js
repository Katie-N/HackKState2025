let audiotest = new Audio('./audio/1 star review.m4a');
let A = new Audio('./audio/Processed/A.mp3');
let B = new Audio('./audio/Processed/B.mp3');
let C = new Audio('./audio/Processed/C.mp3');
let D = new Audio('./audio/Processed/D.mp3');
let E = new Audio('./audio/Processed/E.mp3');
let F = new Audio('./audio/Processed/F.mp3');
let G = new Audio('./audio/Processed/G.mp3');
let H = new Audio('./audio/Processed/H.mp3');
let I = new Audio('./audio/Processed/I.mp3');
let J = new Audio('./audio/Processed/J.mp3');
let K = new Audio('./audio/Processed/K.mp3');
let L = new Audio('./audio/Processed/L.mp3');
let M = new Audio('./audio/Processed/M.mp3');
let N = new Audio('./audio/Processed/N.mp3');
let O = new Audio('./audio/Processed/O.mp3');
let P = new Audio('./audio/Processed/P.mp3');
let Q = new Audio('./audio/Processed/Q.mp3');
let R = new Audio('./audio/Processed/R.mp3');
let S = new Audio('./audio/Processed/S.mp3');
let T = new Audio('./audio/Processed/T.mp3');
let U = new Audio('./audio/Processed/U.mp3');
let V = new Audio('./audio/Processed/V.mp3');
let W = new Audio('./audio/Processed/W.mp3');
let X = new Audio('./audio/Processed/X.mp3');
let Y = new Audio('./audio/Processed/Y.mp3');
let Z = new Audio('./audio/Processed/Z.mp3');
A.preload = 'auto';
B.preload = 'auto';
C.preload = 'auto';
D.preload = 'auto';
E.preload = 'auto';
F.preload = 'auto';
G.preload = 'auto';
H.preload = 'auto';
I.preload = 'auto';
J.preload = 'auto';
K.preload = 'auto';
L.preload = 'auto';
M.preload = 'auto';
N.preload = 'auto';
O.preload = 'auto';
P.preload = 'auto';
Q.preload = 'auto';
R.preload = 'auto';
S.preload = 'auto';
T.preload = 'auto';
U.preload = 'auto';
V.preload = 'auto';
W.preload = 'auto';
X.preload = 'auto';
Y.preload = 'auto';
Z.preload = 'auto';
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
    D.play()
    console.log("The 'd' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'e' || event.key === 'E') {
    E.play()
    console.log("The 'e' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'f' || event.key === 'F') {
    F.play()
    console.log("The 'f' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'g' || event.key === 'G') {
    G.play()
    console.log("The 'g' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'h' || event.key === 'H') {
    H.play()
    console.log("The 'h' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'i' || event.key === 'I') {
    I.play()
    console.log("The 'i' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'j' || event.key === 'J') {
    J.play()
    console.log("The 'j' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'k' || event.key === 'K') {
    K.play()
    console.log("The 'k' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'l' || event.key === 'L') {
    L.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'm' || event.key === 'M') {
    M.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'n' || event.key === 'N') {
    N.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'o' || event.key === 'O') {
    O.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'p' || event.key === 'P') {
    P.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'q' || event.key === 'Q') {
    Q.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'r' || event.key === 'R') {
    R.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 's' || event.key === 'S') {
    S.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 't' || event.key === 'T') {
    T.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'u' || event.key === 'U') {
    U.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'v' || event.key === 'V') {
    V.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'w' || event.key === 'W') {
    W.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'x' || event.key === 'X') {
     X.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'y' || event.key === 'Y') {
    Y.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'z' || event.key === 'Z') {
    Z.play()
    console.log("The 'a' key was pressed!");
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
