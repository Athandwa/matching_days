var input = document.querySelector('.inputBox');
var daysArray = document.querySelectorAll('.WeeklyDays');
var date1 = document.querySelector('.box1');
var date2 = document.querySelector('.box2');



console.log(date1.value);

input.addEventListener('change', function () {
  var dt1 = new Date(date1.value);
  var dt2 = new Date(date2.value);
  var firstDate = dt1.getDay();
  var secDate = dt2.getDay();
  for (var i = 0; i < daysArray.length; i++) {
    daysArray[i];
  }
if (firstDate === secDate) {
  daysArray.classList.add('color3');
}else {
  daysArray[firstDate].classList.add('color1');
  daysArray[secDate].classList.add('color2');
}

});
