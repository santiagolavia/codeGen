//pseudo-codigo code generator page
 
//assign values to down space
let down = document.getElementById('down-space'); 

//this function generates the code
function randomCode (len, arr){
  let ans = '';
  for(let i = len; i > 0; i--){
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}
const char = 'abcdefghijklmnopqrstuvwxyz1234567890'.toUpperCase();

//this put the randomCode in the down space paragraph
function codeButton() { 
  let input = document.getElementById('nameInput').value.toUpperCase();
  if(input.length<16){
    down.innerHTML = input + randomCode(3, char); 
  } else 
    down.innerHTML = 'input must contain not more than 15 characters!!';
 };

//Track your progress
//Error('you must fill the input with 4 to 6 characters');
 