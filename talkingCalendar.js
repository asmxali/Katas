let talkingCalendar = function(date) {
  let year = '';
  let month = '';
  let day = '';

  for (let index in date) {
    if (index >= 0 && index < 4) {
      year += date[index];
    } else if (index > 4 && index < 7) {
      month += date[index];
    } else if (index > 7 && index <= 9) {
      if (Number(date[8]) === 0) {
        day = date[9];
      } else {
        day += date[index];
      }
    }
  }
  month = Number(month);

  switch (month) {
  case 1:
    month = 'January';
    break;
  case 2:
    month = 'February';
    break;
  case 3:
    month = 'March';
    break;
  case 4:
    month = 'April';
    break;
  case 5:
    month = 'May';
    break;
  case 6:
    month = 'June';
    break;
  case 7:
    month = 'July';
    break;
  case 8:
    month = 'August';
    break;
  case 9:
    month = 'September';
    break;
  case 10:
    month = 'October';
    break;
  case 11:
    month = 'November';
    break;
  case 12:
    month = 'December';
    break;
  }

  switch (Number(day)) {
  case (1,21,31):
    day += 'st';
    break;
  case (2,22):
    day += 'nd';
    break;
  case (3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20):
    day += 'th';
    break;
  }
  return month + ' ' + day + ' ' + year;
};

console.log(talkingCalendar("2017/12/20"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));