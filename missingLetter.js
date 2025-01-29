function fearNotLetter(str) {
    debugger
    for (let i = 0; i < str.length; i++) {
        debugger
        /* code of current character */
        const charCode = str.charCodeAt(i);
     
        /* if code of current character is not equal to first character + no of iteration
            then a letter was skipped */
        if (charCode !== str.charCodeAt(0) + i) {
            debugger
          /* if current character skipped past a character find previous character and return */
          console.log(String.fromCharCode(charCode - 1))
          return String.fromCharCode(charCode - 1);
        }
      }
      return undefined;
    }
//    2nd way
function fearNotLetter2(str) {
    debugger
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
    str
      .split("")
      .forEach(letter => {
        debugger
        if (letter.charCodeAt(0) === currCharCode) {
            debugger
          currCharCode++;
        } else {
            debugger
          missing = String.fromCharCode(currCharCode);
        }
      });
  
    return missing;
  }
  
    fearNotLetter2("abce");