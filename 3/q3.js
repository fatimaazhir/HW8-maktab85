
let counter = 0;
function counterMaker(value = 0) {
  counter += value;
  console.log(counter);
}

counterMaker(); 
counterMaker(); 
counterMaker(1); 
counterMaker();
counterMaker(3); 
counterMaker(7); 
counterMaker(-5); 