let mainAudio = new Audio('./audio/Processed/Main.mp3');
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
mainAudio.preload = 'auto';
let duration = NaN; // set duration to NaN so it can be called later
function setDuration(){
    duration = mainAudio.duration;
    duration = Math.floor(duration * 1000); // convert to milliseconds
    }
mainAudio.addEventListener('loadedmetadata', setDuration, { once: true }); // Loads duration once metadata is loaded

document.body.addEventListener("click", function () {
  mainAudio.loop = true;
    mainAudio.play();
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
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'b' || event.key === 'B') {
    B.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'c' || event.key === 'C') {
    C.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'd' || event.key === 'D') {
    D.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'e' || event.key === 'E') {
    E.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'f' || event.key === 'F') {
    F.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'g' || event.key === 'G') {
    G.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'h' || event.key === 'H') {
    H.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'i' || event.key === 'I') {
    I.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'j' || event.key === 'J') {
    J.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'k' || event.key === 'K') {
    K.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'l' || event.key === 'L') {
    L.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'm' || event.key === 'M') {
    M.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'n' || event.key === 'N') {
    N.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'o' || event.key === 'O') {
    O.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'p' || event.key === 'P') {
    P.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'q' || event.key === 'Q') {
    Q.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'r' || event.key === 'R') {
    R.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 's' || event.key === 'S') {
    S.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 't' || event.key === 'T') {
    T.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'u' || event.key === 'U') {
    U.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'v' || event.key === 'V') {
    V.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'w' || event.key === 'W') {
    W.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'x' || event.key === 'X') {
     X.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'y' || event.key === 'Y') {
    Y.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a' (case-insensitive)
  if (event.key === 'z' || event.key === 'Z') {
    Z.play()
    // You can add your desired actions here
    // For example, change the background color:
    // document.body.style.backgroundColor = 'lightblue';
  }
});
