// Link to DOM elements
const contactButton = document.getElementById('contact-button');

// Contact functionality handler
contactButton.addEventListener('click', revealContact);

function revealContact(e) {
    contactButton.innerHTML = '<a href="mailto:contact@douglasnarcizo.com"><h2>contact@douglasnarcizo.com</h2></a>';
}

/* The following code is for adding a "The Matrix" effect to the canvas,
*  as a background animation to the top banner.
*  It is slightly adapted from the code created by Ganesh Prasad as it
*  appears in his post here:
*  https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din */

// Get the canvas node and the drawing context
const canvas = document.getElementById('top-canvas');
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = Math.min( window.innerWidth, 1100 );
const h = 420;
ctx.canvas.width = w;
ctx.canvas.height = h;

/* Portrait setup
const portrait = new Image();
portrait.src = './images/douglas-portrait-alpha.png';
/* -------------- */

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const density = 20;
const cols = Math.floor(w / density) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
    // Draw a semitransparent black rectangle on top of previous drawing
    ctx.fillStyle = '#0002';
    ctx.fillRect(0, 0, w, h);

    // Set color to green and font to 15pt monospace in the drawing context
    ctx.fillStyle = '#0A0';
    ctx.font = '11pt monospace';
  
    // for each column put a random character at the end
    ypos.forEach((y, ind) => {
      // generate a random character
      const text = String.fromCharCode(Math.random() * 128);
  
      // x coordinate of the column, y coordinate is already given
      const x = ind * density;
      // render the character at (x, y)
      ctx.fillText(text, x, y);
      ctx.fillText(text, x, y-1);
  
      // randomly reset the end of the column if it's at least 100px high
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      // otherwise just move the y coordinate for the column 20px down,
      else ypos[ind] = y + 20;
    });

//    ctx.drawImage(portrait, 0, 0);
  }
  
  // render the animation at 20 FPS.
  setInterval(matrix, 50);
  