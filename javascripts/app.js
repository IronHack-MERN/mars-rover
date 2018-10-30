// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
}

// Grid 10x10
var grid = new Array(10);

for(var x=0; x<grid.length; x++){
  grid[x] = new Array(10);
  for(var y=0; y<grid[x].length; y++){
    grid[x][y] = 0;
  }
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  console.log("Initial position: " + rover.direction);
  switch (rover.direction){
    case 'N': rover.direction = 'W'; break;
    case 'S': rover.direction = 'E'; break;
    case 'E': rover.direction = 'N'; break;
    case 'W': rover.direction = 'S'; break;
  }
  console.log("Turn to: " + rover.direction);
} 

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N': rover.direction = 'E'; break;
    case 'S': rover.direction = 'W'; break;
    case 'E': rover.direction = 'S'; break;
    case 'W': rover.direction = 'N'; break;
  }
  console.log("Turn to: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
  console.log("Current position of Rover: (" + rover.x + "," + rover.y + ")");

  switch(rover.direction){
    case 'W':
    if(rover.x > 0){
      rover.x--;
    } else{
      console.log("Sorry, is not posible move to outside");
    }
    break;

    case 'N':
      if(rover.y > 0){
        rover.y--;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'S':
      if(rover.y < grid.length-1){
        rover.y++;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'E':
      if(rover.x < grid.length-1){
        rover.x++;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;   

  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  console.log("Rover has moved, positioned in: (" + rover.x + "," + rover.y + ")");
}

function moveBackward(rover){
  console.log("moveBackward was called");

  switch(rover.direction){
    case 'W':
      if(rover.x < grid.length - 1){
        rover.x++;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'N':
      if(rover.y < grid.length - 1){
        rover.y++;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'S':
      if(rover.y > 0){
        rover.y--;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break;

    case 'E':
      if(rover.x > 0){
        rover.x--;
      } else{
        console.log("Sorry, is not posible move to outside");
      }
      break; 
  }
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  console.log("Rover has moved, positioned in: (" + rover.x + "," + rover.y + ")");
}

function listCommands(commands) {
  commands = validateInputs(commands);
  console.log("chequeados: " + commands);
  for(var i=0; i<commands.length; i++){
    //(f)orward, (r)ight, or (l)eft
    if(commands[i] === "f"){
      moveForward(rover);
    } else if(commands[i] === "b"){
      moveBackward(rover);
    } else if(commands[i] === "r"){
        turnRight(rover);
    } else if(commands[i] === "l"){
        turnLeft(rover);
    }else{
      console.log("Command error!!!");
    }
  }
}

//  Correct inputs: f, b, r, l
function validateInputs(list){
  var correctCommands = ['f','b','r','l'];
  var checkedList = '';
  
  for(var i = 0; i < correctCommands.length; i++){
    for(var j = 0; j<list.length; j++){
      if(correctCommands[i] === list[j]){
        checkedList+=list[j];
      }
    }
  }
  console.log("Lista inicial " + list + " lista chequeda: " + checkedList);
return checkedList;
}

// Testing
listCommands("rrffr");
grid[rover.x][rover.y] = " X ";
console.log("rover travelog: " + rover.travelLog);
console.log(grid);