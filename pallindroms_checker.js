function palindrome(str) {
    debugger
    const alphanumericOnly = str
    // 1) Lowercase the input
    .toLowerCase()
    // 2) Strip out non-alphanumeric characters
    .match(/[a-z0-9]/g);
    
// 3) return string === reversedString
console.log(alphanumericOnly.join('') ===
alphanumericOnly.reverse().join(''))
return alphanumericOnly.join('') ===
    alphanumericOnly.reverse().join('');
  
  }
  
  
  
  palindrome("nope");
  