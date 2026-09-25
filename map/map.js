

// draw a grid in the middle of the screen 
// we should see the lines first 

export const drawMap = (cellSize) => {

  // obtain the canvas 
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let coord = {x: 0, y:0}

  //define the size of the canvas 
  const width = canvas.width;
  const height = canvas.height;

  // color and size of the lines 
  ctx.strokeStyle = 'black'; 
  ctx.lineWidth = 1; 

  ctx.beginPath();

  // draw the lines in the canvas 
  for(let x = 0; x <= width; x += cellSize){
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);

  } 

  for (let y = 0; y <= height; y += cellSize){
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
 
    ctx.stroke();


}

