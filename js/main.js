
const number = document.getElementsByClassName("number");
const plus = document.getElementById("plus");
const formula = [];
const equal = document.getElementById("equal");
let show = document.getElementById('content');
　
for (let i = 0; i < 10; i++) {
  number[i].addEventListener('click', function () {
    show.innerHTML = show.innerHTML + number[i].value;
  }, false);
}
  plus.addEventListener('click', function () {
    const num = Number(show.innerHTML);
    formula.push(num);
  });
  equal.addEventListener('click', function (num) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(formula.reduce(reducer));
});