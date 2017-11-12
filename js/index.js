const numberMetod = Number(prompt(`Введіть номер методу для знаходження числа Фібоначчі(1-10):
1)За допомогою двох змінних;
2)За допомогою масиву;
3)Рекурсивним методом;
4)Методом запам'ятовування;
5)За допомогою формули Фібоначчі;
6) За допомогою Тернарного оператора;
7)Використати всі методи;`));

if (numberMetod >= 1 && numberMetod <= 7) {
 const n = Number(prompt('Введіть номер числа:\n' + 'N= '));
  if (n>=1 && n<=10){
   switch (numberMetod) {
    case 1:
     document.write('1) За допомогою двох змінних: ' + twoValueFibonacchi(n) + '<br>');
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
     document.write('6) За допомогою Тернарного оператора: ' + ternaryOper(n) + '<br>');
     break;
    case 7:
     document.write('1) За допомогою двох змінних: ' + twoValueFibonacchi(n) + '<br>');
     document.write('2) За допомогою масиву: ' + +masFibonacchi(n) + '<br>');
     document.write('3) Рекурсивним методом: ' + recursuvMetod(n) + '<br>');
     document.write('4) Методом запам\'ятовування: ' + rememberNamb(n) + '<br>');
     document.write('5) За допомогою формули Фібоначчі: ' + fibonacciFormula(n) + '<br>');
     break;
   }
  }
  else{
    document.write('ERROR');
  }
}
else {
 document.write('ERROR');
}
function twoValueFibonacchi(n) {
 if (n <= 2) {
  return 1;
 }
 let firstNumber = 1;
 let secondNumber = 1;
 let thirdNumber = 0;
 for (let i = 2; i < n; i++) {
  thirdNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = thirdNumber;
 }
 return thirdNumber;
}
function masFibonacchi(n) {
 let fib = [1, 1];
 const m = n - 1
 for (let i = 2; i <= m; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
 }
 return fib[m];
}
function recursuvMetod(n) {
 if (n <= 1 ) {
  return n;
 }
 return recursuvMetod(n - 2) + recursuvMetod(n - 1);
}

function rememberNamb(n) {
 let mas = [0, 1];
 if (n === 0){ 
  return mas[0];
  
 }
 if (n === 1) {
  return mas[1];
  
 }
 if (!mas[n]) {
  mas[n] = rememberNamb(n - 2) + rememberNamb(n - 1);
 }
 return mas[n];
}

function fibonacciFormula(n) {
 const sqrt = Math.pow(5, 0.5);
 const left = (1 + sqrt) / 2;
 const right = (1 - sqrt) / 2;
 return Math.round((Math.pow(left, n) - Math.pow(right, n)) / sqrt);
}
function ternaryOper(n){
 return n <= 1 ? n : ternaryOper(n - 1) + ternaryOper(n - 2);
}