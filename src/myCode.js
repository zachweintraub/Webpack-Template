export function fibSum(){
  let fibArray = [0, 1];
  let output = 0;
  while (fibArray[fibArray.length-1] < 4000000) {
    fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2]);  
  }
  for(let i = 0; i < fibArray.length; i++) {
    if(fibArray[i] % 2 == 0 && fibArray[i] < 4000000){
      output += fibArray[i];
    }
  }
  return output;
}