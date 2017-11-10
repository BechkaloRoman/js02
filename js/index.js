const number = Number(prompt('Введіть номер методу для знаходження числа Фібоначчі(1-10):\n' +
 '1) За допомогою двох змінних;\n' + '2)За допомогою масиву;\n ' + '3)Рекурсивним методом;\n ' +
 '4)Методом запам\'ятовування;\n ' + '5)За допомогою формули Фібоначчі;\n ' + '6)Використати всі методи;\n '));

if (number >= 1 && number <= 6) {
 const n = Number(prompt('Введіть номер числа:\n' + 'N= '));

 switch (number) {
  case 1:
   document.write('1) За допомогою двох змінних: ' + twoValue_fibonacchi(n) + '<br>');
   break;

  case 2:
   document.write('2) За допомогою масиву: ' + +masFibonacchi(n) + '<br>');
   break;

  case 3:
   document.write('3) Рекурсивним методом: ' + recursuvMetod(n) + '<br>');
   break;

  case 4:
   document.write('4) Методом запам\'ятовування: ' + rememberNamb(n) + '<br>');
   break;

  case 5:
   document.write('5) За допомогою формули Фібоначчі: ' + fibonacciFormula(n) + '<br>');
   break;

  case 6:
   document.write('1) За допомогою двох змінних: ' + twoValue_fibonacchi(n) + '<br>');
   document.write('2) За допомогою масиву: ' + +masFibonacchi(n) + '<br>');
   document.write('3) Рекурсивним методом: ' + recursuvMetod(n) + '<br>');
   document.write('4) Методом запам\'ятовування: ' + rememberNamb(n) + '<br>');
   document.write('5) За допомогою формули Фібоначчі: ' + fibonacciFormula(n) + '<br>');

   break;
 }
}
else {
 document.write('ERROR');
}

function twoValue_fibonacchi(n) {
 if (n <= 2) return 1;
let x = 1;
 let y = 1;
 let z = 0;
 for (let i = 2; i < n; i++) {
  z = x + y;
  x = y;
  y = z;
 }
 return z;
}

function masFibonacchi(n) {
 let fib = [1, 1];
 let i;
 const m = n - 1
 for (i = 2; i <= m; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
 }
 return fib[m];
}

function recursuvMetod(n) {
 if (n === 0) return 0;
 if (n ===1) return 1;
 return recursuvMetod(n - 2) + recursuvMetod(n - 1);
}

function rememberNamb(n) {
 let mas = [0, 1];
 if (n === 0) return mas[0];

 if (n === 1) return mas[1];

 if (!mas[n]) {
  mas[n] = rememberNamb(n - 2) + rememberNamb(n - 1);
 }
 return mas[n];
}

function fibonacciFormula(n) {
 const sqrt = Math.pow(5, 0.5);
 const left = (1 + sqrt) / 2;
 const right = (1 - sqrt) / 2;
 return (Math.pow(left, n) - Math.pow(right, n)) / sqrt;
}
