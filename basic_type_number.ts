/**
 * Basic Type di TypeScrip:
 * 
 * - number
 * 
 */
let decimal: number = 666;
let hex: number = 0xf00d;
let binary: number = 0b1110;
let octal: number = 0o764;

let isHexNumber:boolean = true;
let isBinaryNumber: boolean= true;

console.log(decimal);

if(isHexNumber){
  console.log(`0x${hex.toString(16)}`);
}

if(isBinaryNumber) {
  console.log(`0b${binary.toString(2)}`);
}

console.log(`0o${octal.toString(8)}`);