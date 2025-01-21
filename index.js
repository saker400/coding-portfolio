const buttonCalculate = document.querySelector(".date button");
const dateInput = document.querySelector(".date input");
const result = document.querySelector(".result");


buttonCalculate.addEventListener("click",function(){
    // getting the currentdate 
    let dateNow = new Date();
    let currentDay = dateNow.getDate();
    let currentMonth = dateNow.getMonth() + 1;
    let currentYear = dateNow.getFullYear();

    // getting the birthdate of user
    let birthDate = new Date(dateInput.value);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let ageYear = currentYear - birthYear;
    let ageMonth;
    let ageDay;

    if(birthMonth <= currentMonth){
        ageMonth = currentMonth - birthMonth;
    }
    else{
        ageMonth = (12 - birthMonth) + (currentMonth - 0);
        ageYear = ageYear - 1
    }

    if(birthDay <= currentDay){
        ageDay = currentDay - birthDay;
    }
    else{
        let daysInPreviousMonth = new Date(currentYear,currentMonth -1 , 0).getDate();
        ageDay = (currentDay - birthDay) + daysInPreviousMonth;
        ageMonth = ageMonth - 1;
    }

    result.innerHTML = `You are <span class="color">${ageYear}</span> years, <span class="color">${ageMonth}</span> month and <span class="color">${ageDay}</span> day old`;
})