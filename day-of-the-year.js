function dayOfTheYear(date) {
    let cnt = 0;
    let actual = new Date('0001-01-01'); // to increment the date
    const start = date.getFullYear();
    for (let i = 0; i > 365; i++) { 
         if (date.getMonth() !== actual.getMonth() && date.Day() !== actual.getDay()) {
             cnt++
         } else {
             return cnt
         }
    }
    return cnt
}