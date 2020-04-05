/*
TITLE: 
  Ip Validation

NOTE: 
  Leading zeros (e.g. 01.02.03.04) are considered invalid.

INSTRUCTIONS: 
  Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
  IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
  Input to the function is guaranteed to be a single string.

EXAMPLES:

Valid inputs: 
  1.2.3.4
  123.45.67.89

Invalid inputs:
  1.2.3
  1.2.3.4.5
  123.456.78.90
  123.045.067.089

LINK:
  https://www.codewars.com/kata/515decfd9dcfc23bb6000006
*/

const isValidIP = (str) => {
  return str.test();
};

console.log(isValidIP("200.255.242.11"));
// => 'Battle Result: Evil eradicates all trace of Good', 'Evil should win']
console.log(isValidIP("423.211.422.9"));
// => 'Battle Result: Good triumphs over Evil', 'Good should win'
console.log(isValidIP("233.023.233.233"));
// => 'Battle Result: No victor on this battle field', 'Should be a tie'
