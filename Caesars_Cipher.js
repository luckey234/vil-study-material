//data_structure 

var lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M'
  };
  
  function rot13(encodedStr) {
    debugger
    var codeArr = encodedStr.split("");  // String to Array
    var decodedArr = []; // Your Result goes here
    // Only change code below this line
  
    decodedArr = codeArr.map((letter)=> {
      if(lookup.hasOwnProperty(letter)) {
        letter = lookup[letter];
      }
      return letter;
    });
    // for(let x of codeArr){
    //     if(lookup.hasOwnProperty(x)) {
    //             letter = lookup[x];
    //           }
    //           return letter;
    // }
  
    // Only change code above this line
    console.log(decodedArr.join(""))
    return decodedArr.join(""); // Array to String
  }
  function rot131st(str) { // LBH QVQ VG!
  const Acode='A'.charCodeAt();
  const Ncode='N'.charCodeAt();
  const Zcode='Z'.charCodeAt();
  return [...str].map(
    function(e){
      const code=e.charCodeAt();
      if(Acode<=code && code<=Zcode){
        if(code<Ncode){
          return String.fromCharCode(code+13);
        } else {
          return String.fromCharCode(code-13);
        }
      } else {
        return e;
      }
    }
  ).join("");
}

//2nd solutions
function rot13_2nd(str) { // LBH QVQ VG!
    const Acode='A'.charCodeAt();
    const Ncode='N'.charCodeAt();
    const Zcode='Z'.charCodeAt();
     return [...str].map(
      function(e){
        const code=e.charCodeAt();
        if(Acode<=code && code<=Zcode){
          if(code<Ncode){
            return String.fromCharCode(code+13);
          } else {
            return String.fromCharCode(code-13);
          }
        } else {
          return e;
        }
      }
    ).join("");
  }

  function rot13_3rd(str) {
    debugger
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
      if (regEx.test(str[x])) {
        // A more general approach
        // possible because of modular arithmetic
        // and cyclic nature of rot13 transform
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }
  function rot13_4th(str) {
    // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L =>
      String.fromCharCode((L.charCodeAt(0) % 26) + 65)
    );
  }
  rot13("SERR PBQR PNZC");