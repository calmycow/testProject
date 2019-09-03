let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}
start();

var аppData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите необязательную статью расходов",''); 
            // b = +prompt("Во сколько обойдется?",'')
    
        if ( (typeof(a))==='string' && (typeof(a)) != null 
            && a != '' && a.length < 50) {
            console.log ("ok");
            аppData.optionalExpenses[i+1] = a;
        } else {
            alert ("Вы не ввели значение, попробуйте ещё раз");
            i--;
            console.log ("i - 1");
        }
    };
}
chooseOptExpenses();

function detectDayBudget() {
    аppData.moneyPerDay = (аppData.budget/30).toFixed(1);
    alert ("Ежедневный бюджет: " + аppData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (аppData.moneyPerDay < 100) {
        console.log ("Минимальный уровень достатка");
    } else if (аppData.moneyPerDay > 100 && аppData.moneyPerDay < 2000){
        console.log ("Средний уровень достатка");
    } else if (аppData.moneyPerDay > 2000 ) {
        console.log ("Средний уровень достатка");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();

function checkSavings(){
    if (аppData.savings == true) {
        let save = +prompt ("Какова сумма накоплений?"),
            percent = +prompt ("Под какой процент?");
        
        аppData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + аppData.monthIncome);
        
    }
}
checkSavings();