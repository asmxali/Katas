let talkingCalendar = function(date) {
  let year = '';
  let month = '';
  let day='';

for (let index in date) {
  if (index >= 0 && index < 4) {
      year+= date[index];
  } else if (index > 4 && index < 7) {
    month += date[index];
  } else if (index > 7 && index <= 9){
    if(Number(date[8]) === 0){
      day = date[9];
    } else {
     day += date[index]; 
    }
  } else {
  } // Your code here
};
month = Number(month);

switch (month) {
  case 1:
  month = 'January';
  case 2:
    month = 'February';
  case 3:
    month = 'March';
  case 4:
    month = 'April';
  case 5:
    month = 'May';
  case 6: 
  month = 'June';
  case 7:
    month = 'July';
  case 8:
    month = 'August';
  case 9:
    month = 'September';
  case 10:
    month = 'October';
  case 11:
    month = 'November';
  case 12:
    month = 'December';
}

switch (Number(day)) {
  case (1,21,31):
    day += 'st';
  case (2,22):
    day += 'nd';
  case (3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20):
    day += 'th';
}
return month + ' ' + day+ ' ' + year;
}

console.log(talkingCalendar("2017/12/20"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));