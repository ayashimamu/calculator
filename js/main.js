
const number = document.getElementsByClassName("number");
const plus = document.getElementById("plus").value;
const minus = document.getElementById("minus").value;
const mult = document.getElementById("mult").value;
const divide = document.getElementById("divide").value;
const numbers = [];
const calculate = [];
let show = document.getElementById('content');
　
for (let i = 0; i < 10; i++) {
  number[i].addEventListener('click', function () {
    show.innerHTML = show.innerHTML + number[i].value;
  }, false);
}
document.getElementById("plus").addEventListener('click',
  function () {
     const num = Number(show.innerHTML);
     numbers.push(num);
    show.innerHTML = show.innerHTML + plus;
    calculate.push(plus);
  });
document.getElementById("minus").addEventListener('click',
  function () {
    const num = Number(show.innerHTML);
    numbers.push(num);
    show.innerHTML = show.innerHTML + minus;
    calculate.push(minus);
  });
document.getElementById("mult").addEventListener('click',
  function () {
    const num = Number(show.innerHTML);
    numbers.push(num);
    show.innerHTML = show.innerHTML + mult;
    calculate.push(mult);
  });
  document.getElementById("divide").addEventListener('click',
  function () {
    const num = Number(show.innerHTML);
    numbers.push(num);
    show.innerHTML = show.innerHTML + divide;
    calculate.push(divide);
  });
document.getElementById("equal").addEventListener('click',
  function () {
    const total = numbers.reduce(function (sum,element) {
      return sum + element;
    }, 0);
    console.log(total);
})