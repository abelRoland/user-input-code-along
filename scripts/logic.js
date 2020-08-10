
const substringLogic = (userString, start, end) => {
      
const result = userString.substr(start, end);

// communicate result to user
document.getElementById('program-output').innerHTML = result;

// log action for developers
console.log('\n-- user action --');
console.log('userString:', (typeof userString) + ',', userString);
console.log('preStart:', (typeof preStart) + ',', preStart);
console.log('start:', (typeof start) + ',', start);
console.log('preEnd:', (typeof preEnd) + ',', preEnd);
console.log('end:', (typeof end) + ',', end);
console.log('result:', (typeof result) + ',', result);

}