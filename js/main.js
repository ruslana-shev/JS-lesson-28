function Calc() {
	this.methods = {
		'+': function (arg1, arg2) {return arg1 + arg2},
		'-': function (arg1, arg2) {return arg1 - arg2},
		'*': function (arg1, arg2) {return arg1 * arg2},
		'/': function (arg1, arg2) {return arg1 / arg2}
	}
	this._result = 0;
}
Calc.prototype.hello = function() {
	alert ('Привет я старенький калькулятор');
};
Calc.prototype.init = function() {
	// приветствие
	this.hello();
	// запрос ввода чисел и оператора
	this._firstVal = +(prompt('Введите первое число', 0));
	this._secondVal = +(prompt('Введите второе число', 0));
	this._operator = prompt('Введите оператор', "+");
	this.canCalc = false;
	// проверка, является ли введенное значение числом
	this.validate();
	this.canCalc ? this.calculate() : alert("Ошибка! Введенное значение не является числом");
};
Calc.prototype.validate = function () {
	isNaN(this._firstVal) || isNaN(this._secondVal) ? this.canCalc = false : this.canCalc = true;
};

Calc.prototype.calculate = function () {
	if(this.methods[this._operator]) {
		this._result = this.methods[this._operator](this._firstVal, this._secondVal);
		alert(`Ваш результат ${ this._result }`);
	} else {
		alert("Вы ввели не существующий оператор");
	}
};

function CalcEngenear() {
	Calc.call(this);
	this.methods["pi"] = function (arg1, arg2) {return Math.PI},
	this.methods["pow2"] = function (arg1, arg2) {return Math.pow(arg1, 2)}
}
CalcEngenear.prototype = Object.create(Calc.prototype);
CalcEngenear.prototype.constructor = CalcEngenear;

CalcEngenear.prototype.addMethods = function(name, func){
	this.methods[name] = function(arg1, arg2) {return func(arg1, arg2)};
}


var calc = new Calc();
var calcEngenear = new CalcEngenear();
//console.log(calcEngenear.addMethods("sqrt", Math.sqrt); //добавляем ф-цию нахождения квадратного корня из числа
console.log(calcEngenear);
//console.log(calcEngenear.init())
