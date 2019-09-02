var money = +prompt("Ваш бюджет на месяц?",'');
var time = prompt("Введите дату в формате YYYY-MM-DD",'');

var аppData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false
};

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",''), 
//         b = +prompt("Во сколько обойдется?",'');

//     if ( (typeof(a))==='string' && (typeof(a)) != null 
//         && (typeof(b)) != null && a != '' && b != ''
//         && a.length < 50) {
//         console.log ("done");
//         аppData.expenses[a] = b;
//     } else {
//         alert ("Вы не ввели значение, попробуйте ещё раз");
//         i--;
//         console.log ("i - 1");
//     }
//     i++;
// } while (i < 2);

// let i = 0;
// while (i < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце",''), 
//         b = +prompt("Во сколько обойдется?",'');

//     if ( (typeof(a))==='string' && (typeof(a)) != null 
//         && (typeof(b)) != null && a != '' && b != ''
//         && a.length < 50) {
//         console.log ("done");
//         аppData.expenses[a] = b;
//     } else {
//         alert ("Вы не ввели значение, попробуйте ещё раз");
//         i--;
//         console.log ("i - 1");
//     }
//     i++;
// }


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",''), 
        b = +prompt("Во сколько обойдется?",'');

    if ( (typeof(a))==='string' && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != ''
        && a.length < 50) {
        console.log ("done");
        аppData.expenses[a] = b;
    } else {
        alert ("Вы не ввели значение, попробуйте ещё раз");
        i--;
        console.log ("i - 1");
    }
};

аppData.moneyPerDay = аppData.budget/30;
alert ("Ежедневный бюджет: " + аppData.moneyPerDay);

if (аppData.moneyPerDay < 100) {
    console.log ("Минимальный уровень достатка");
} else if (аppData.moneyPerDay > 100 && аppData.moneyPerDay < 2000){
    console.log ("Средний уровень достатка");
} else if (аppData.moneyPerDay > 2000 ) {
    console.log ("Средний уровень достатка");
} else {
    console.log ("Произошла ошибка");
}