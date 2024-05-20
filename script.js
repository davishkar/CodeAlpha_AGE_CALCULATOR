function calculateAge() {
    const birthDay = document.getElementById('birthDay').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthYear = document.getElementById('birthYear').value;

    const currentDay = document.getElementById('currentDay').value;
    const currentMonth = document.getElementById('currentMonth').value;
    const currentYear = document.getElementById('currentYear').value;

    if (!birthDay || !birthMonth || !birthYear || !currentDay || !currentMonth || !currentYear) {
        document.getElementById('result').innerText = 'Please fill in all fields.';
        return;
    }

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerText = `You are ${ageYears} years, ${ageMonths} months and ${ageDays} days old.`;
}
