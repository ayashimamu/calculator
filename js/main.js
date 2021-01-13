const numbers = document.getElementsByClassName("number");
let show = [];
for (let i = 0; i < 10; i++) {
  numbers[i].addEventListener('click', function () {
    show.push(numbers[i].value);
  }, false);
}
this.show = document.getElementById('content').innerHTML;