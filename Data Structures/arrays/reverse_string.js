// Create a function that reverses a string:
// 'Hi My name is Johny' shoud be:
// 'ynhoK si eman yM iH

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats not good';
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join('');
}

function reverse2(str) {
  //
  return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');

const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse('Hi My name is Johny'));
console.log(reverse2('Hi My name is Johny'));
console.log(reverse3('Hi My name is Johny'));
console.log(reverse4('Hi My name is Johny'));
