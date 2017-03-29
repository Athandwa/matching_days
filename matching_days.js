var input = document.querySelector('.inputBox');
var daysArray = document.querySelectorAll('.WeeklyDays');
var date1 = document.querySelector('.box1');
var date2 = document.querySelector('.box2');


input.addEventListener('change', function() {
    var dt1 = new Date(date1.value);
    var dt2 = new Date(date2.value);
    var firstDate = dt1.getDay();
    var secDate = dt2.getDay();
    for (var i = 0; i < daysArray.length; i++) {
        daysArray[i].classList.remove('color3');
        daysArray[i].classList.remove('color2');
        daysArray[i].classList.remove('color1');
    }

    if (firstDate === secDate) {
        daysArray[secDate].classList.add('color3');

    } else if (firstDate){

      daysArray[firstDate].classList.add('color1');
      daysArray[secDate].classList.add('color2');

    {

      daysArray[secDate].classList.add('color2');
  }
}
});
