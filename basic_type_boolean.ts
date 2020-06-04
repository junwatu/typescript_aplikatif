/**
 * Basic Type di TypeScript:
 * 
 * - boolean
 * 
 * booelan hanya bisa bernilai 'true' atau 'false'
 * dan tidak bisa 1 atau 0
 */
let isDone: boolean = false;
let isValid: boolean = true;

//error
//let isNotValid: boolean = 0;

if(isValid) {
  console.log(`isDone: ${isDone} dan isValid: ${isValid}`);
}
