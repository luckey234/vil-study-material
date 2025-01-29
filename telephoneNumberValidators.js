var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
    debugger
  return re.test(str);
}

telephoneCheck("555-555-5555");


// 2nd_Way
var re = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;

function telephoneCheck(str) {
  console.log(re.test(str))
  return re.test(str);
}

telephoneCheck("5555555555");
// ref:https://regex101.com/