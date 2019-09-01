var money = prompt("Ваш бюджет на месяц?",'');
var time = prompt("Введите дату в формате YYYY-MM-DD",'');
var CompulsoryCosts = prompt("Введите обязательную статью расходов в этом месяце",''); 
var CompulsoryCostsPrice = prompt("Во сколько обойдется?");

var AppData = {
    budget: money,
    timeData: time,
    expenses:{CompulsoryCosts:CompulsoryCostsPrice},
    optionalExpenses:{},
    income:[],
    savings: false
};

alert (money/30);