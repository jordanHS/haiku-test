export class Haiku{
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableChecker(lineInput){
    let line = lineInput.toLowerCase();
    let vowelArr = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(let i = 0; i < line.length; i++){
      if(vowelArr.includes(line[i])){
        if(i === line.length - 1){
          count--;
        }
        else if(line[i] !== line[i+1]){
          count++;
        }
      }
    }
    if(line[line.length - 1] === "y"){
      count++;
    }
    return count;
  }

  isValid() {
    if (this.syllableChecker(this.line1) === 5 && this.syllableChecker(this.line2) === 7 && this.syllableChecker(this.line3) === 5) {
      return "That is a Haiku!";
    } else {
      return "That is not a Haiku!";
    }
  }
}
