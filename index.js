/*         Number Guessing Game     */         

let a = Math.random()*100;
a = Number.parseInt(a)
let guess
let score = 100;

while(guess!=a){
  score = score-1
  guess = prompt("Enter the Number:")
  if(guess == a){
    console.log("Congratulations, you won")
   console.log(`You scored ${100-score} points.`)
  }
  else if(guess>a && guess < 100){
    console.log("your number is greater")
  }
  else if(guess<a && guess > 0){
      console.log("your number is smaller")
  }
  else{
     console.log("Enter number between 1 to 100")
  }
}
