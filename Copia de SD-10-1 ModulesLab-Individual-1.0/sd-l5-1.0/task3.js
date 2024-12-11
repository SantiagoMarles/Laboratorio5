export function ageCalculator(year, month, day) {
    const today = new Date ();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let age = currentYear - year;

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    return age;

}
    
const age = ageCalculator(1998, 7, 11);
console.log(`Tu edad es: ${age}`)