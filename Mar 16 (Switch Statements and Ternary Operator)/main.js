


// let switchValue = new Date().getDay();

// switch (switchValue) {
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('The eighth day the Beatles sang about');
// }


function isMult4(year) {
    return year % 4 === 0;
}

function isCentury(year) {
    return year % 100 === 0;
}

function isMult400(year) {
    return year % 400 === 0;
}

function isLeapYear(year) {
    return isCentury(year) ? isMult400(year) : isMult4(year);
}

console.log(isLeapYear(2400));