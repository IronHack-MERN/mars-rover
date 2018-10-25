// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
}

// Grid 
var grid = new Array(10);

for(var x=0; x<grid.length; x++){
  grid[x] = new Array(10);
  for(var y=0; y<grid[x].length; y++){
    grid[x][y] = null;
  }
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  console.log("Initial position is: " + rover.direction);
  switch (rover.direction){
    case 'N': rover.direction = 'W'; break;
    case 'S': rover.direction = 'E'; break;
    case 'E': rover.direction = 'N'; break;
    case 'W': rover.direction = 'S'; break;
  }
  console.log("Actual position: " + rover.direction);
} 

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N': rover.direction = 'E'; break;
    case 'S': rover.direction = 'W'; break;
    case 'E': rover.direction = 'S'; break;
    case 'W': rover.direction = 'N'; break;
  }
  console.log("Actual position: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction){

    case 'N':
      if((rover.y < rover.length) && (rover.y > 0)){
        rover.y--;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'w':
      if((rover.x < rover.length) && (rover.x > 0)){
        rover.x--;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'S':
      if(rover.y < rover.length){
        rover.y++;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'E':
      if(rover.x < grid.length){
        rover.x++;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;   

  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  console.log("Rover has moved, positioned in: (" + rover.x + "," + rover.y + ")");
}

function listCommands(commands) {
  
  for(var i=0; i<commands.length; i++){
    //(f)orward, (r)ight, or (l)eft
    if(commands[i] === "f"){
      moveForward(rover);
    } else if(commands[i] === "r"){
        turnRight(rover);
    } else if(commands[i] === "l"){
        turnLeft(rover);
    } else{
      console.log("Command error!!!");
    }
  }
}

// Testing
listCommands("rffrfflfrff");
console.log(rover.travelLog);
grid[rover.x][rover.y] = "XXX";
console.log(grid);

