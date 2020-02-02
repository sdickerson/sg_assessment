export function getTimestamp () {
    var runDatetime = new Date();
    var runHour = runDatetime.getUTCHours().toString();
    var runMin = runDatetime.getMinutes().toString();
    var runSec = runDatetime.getSeconds().toString();
    if (runHour.length < 2) runHour = '0' + runHour;
    if (runMin.length < 2) runMin = '0' + runMin;
    if (runSec.length < 2) runSec = '0' + runSec;
    return runDatetime.toJSON().slice(0, 10).replace(/-/g, '') +
        runHour + runMin + runSec;
}
export function calculateDate (initialDate, numDays) {
    var newDate = new Date(initialDate);
    newDate.setDate(newDate.getDate() + parseInt(numDays));
    return ((newDate.getMonth() + 1).toString() + '/' + newDate.getDate().toString() + '/' + newDate.getFullYear());
}
export function formatDateLeadingZero (date) {
    var newDate = new Date(date);
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    if (month.toString().length < 2) month = '0' + month.toString();
    if (day.toString().length < 2) day = '0' + day.toString();
    return (month.toString() + '/' + day.toString() + '/' + newDate.getFullYear());
}
export function formatDateLeadingZeroTwoDigitYear (date) {
    var newDate = new Date(date);
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    if (month.toString().length < 2) month = '0' + month.toString();
    if (day.toString().length < 2) day = '0' + day.toString();
    return (month.toString() + '/' + day.toString() + '/' + newDate.getFullYear().toString().substr(2, 2));
}
export function getNextMonthBegin (date) {
    var nextMonth = date.getMonth() + 2;
    var year = date.getFullYear();
    if (nextMonth > 12) {
        nextMonth = 1;
        year = year + 1;
    }
    return (nextMonth.toString() + '/1/' + year.toString());
}
export function getLastDayOfMonth (date) {
    var newDate = new Date(date);
    var month = newDate.getMonth() + 1;
    newDate = new Date(newDate.getFullYear(), month, 0);
    return (month.toString() + '/' + newDate.getDate().toString() + '/' + newDate.getFullYear());
}

export function generateEmailAddress (emailRoot, emailDomain) {
    let emailAddress = '';
    let charIndex = emailRoot.toString().indexOf('.');
    if (charIndex > 0) {
        emailAddress = emailRoot.substring(0, charIndex) + getTimestamp() +
            emailRoot.substring(charIndex) + emailDomain;
    } else {
        emailAddress = emailRoot + getTimestamp() + emailDomain;
    }
    // console.log('New email generated = ' + emailAddress);
    return emailAddress;
}

export function getDatestamp (addDays) {
    var newDate = new Date();
    newDate.setDate(newDate.getDate() + parseInt(addDays));
    return newDate.toJSON().slice(0, 10).replace(/-/g, '');
}
