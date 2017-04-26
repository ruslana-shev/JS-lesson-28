// function Calc() {
// 	this.methods = {
// 		'+': function (arg1, arg2) {return arg1 + arg2},
// 		'-': function (arg1, arg2) {return arg1 - arg2},
// 		'*': function (arg1, arg2) {return arg1 * arg2},
// 		'/': function (arg1, arg2) {return arg1 / arg2}
// 	}
// 	this._result = 0;
// }
// Calc.prototype.hello = function() {
// 	alert ('Привет я старенький калькулятор');
// };
// Calc.prototype.init = function() {
// 	// приветствие
// 	this.hello();
// 	// запрос ввода чисел и оператора
// 	this._firstVal = +(prompt('Введите первое число', 0));
// 	this._secondVal = +(prompt('Введите второе число', 0));
// 	this._operator = prompt('Введите оператор', "+");
// 	this.canCalc = false;
// 	// проверка, является ли введенное значение числом
// 	this.validate();
// 	this.canCalc ? this.calculate() : alert("Ошибка! Введенное значение не является числом");
// };
// Calc.prototype.validate = function () {
// 	isNaN(this._firstVal) || isNaN(this._secondVal) ? this.canCalc = false : this.canCalc = true;
// };

// Calc.prototype.calculate = function () {
// 	if(this.methods[this._operator]) {
// 		this._result = this.methods[this._operator](this._firstVal, this._secondVal);
// 		alert(`Ваш результат ${ this._result }`);
// 	} else {
// 		alert("Вы ввели не существующий оператор");
// 	}
// };

// function CalcEngenear() {
// 	Calc.call(this);
// 	this.methods["pi"] = function (arg1, arg2) {return Math.PI},
// 	this.methods["pow2"] = function (arg1, arg2) {return Math.pow(arg1, 2)}
// }
// CalcEngenear.prototype = Object.create(Calc.prototype);
// CalcEngenear.prototype.constructor = CalcEngenear;

// CalcEngenear.prototype.addMethods = function(name, func){
// 	this.methods[name] = function(arg1, arg2) {return func(arg1, arg2)};
// }


// var calc = new Calc();
// var calcEngenear = new CalcEngenear();
// //console.log(calcEngenear.addMethods("sqrt", Math.sqrt); //добавляем ф-цию нахождения квадратного корня из числа
// console.log(calcEngenear);
// //console.log(calcEngenear.init())

//Задачи по ООП 
//1
// function Planet(name) {
// 	this.name = name;
// 	this.getName = function () {
// 		return 'Planet name is ' + this.name;
// 	}
// }
// function PlanetWithSatellite (name, nameSatellite){
// 	Planet.apply(this, arguments);
// 	var originalFunc = this.getName;
// 	this.nameSatellite = nameSatellite;
// 	this.getName = function () {
// 	var originalRes = originalFunc.call(this);
// 	return originalRes + ' The satellite is ' + this.nameSatellite;
// 	}
// }
// var planet = new Planet('earth');
// var earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth);
// console.log(earth.getName()); 

//2
// function Building (name, floor) {
// 	this.name = name;
// 	this.floor = floor;
// 	this.getFloor = function () {
// 		return this.floor;
// 	};
// 	this.setFloor = function (value) {
// 		this.floor = value;
// 	};
// }
// function House (name, floor, apartments) {
// 	this.apartments = apartments;
// 	Building.apply(this, arguments);
// 	var originalFunc = this.getFloor;
// 	this.getFloor = function (){
// 		var originalRes = originalFunc.apply(this, arguments);
// 		return {
// 			floor: originalRes,
// 			totalApartments: originalRes * this.apartments
// 		}
// 	}
// }
// function ShoppingCenter (name, floor, shops){
// 	this.shops = shops;
// 	Building.apply(this, arguments);
// 	var originalFunc = this.getFloor;
// 	this.getFloor = function (){
// 		var originalRes = originalFunc.apply(this, arguments);
// 		return {
// 			floor: originalRes,
// 			totalShops: originalRes * this.shops
// 		}
// 	}
// }
// var building = new Building ("building", 3);
// var house = new House ('Жилой дом', 5, 4);
// console.log(house);
// console.log(house.getFloor());
// var shoppingCenter = new ShoppingCenter("Торговый центр", 3, 5);
// console.log(shoppingCenter);
// console.log(shoppingCenter.getFloor());

//3
// function Furniture (name, price){
// 	this.name = name;
// 	this.price = price;
// }
// Furniture.prototype.getFurnitureInfo = function(){
// 	return {
// 		name: this.name, 
// 		price: this.price
// 	}
// };
// var furniture = new Furniture('стул', 550);
// console.log(furniture.getFurnitureInfo());

// var officeFurniture = new Furniture('стул', 550);
// officeFurniture.copier = 'xerox';
// officeFurniture.getFurnitureInfo = function () {
// 	var originalRes = Furniture.prototype.getFurnitureInfo.call(this);
// 	originalRes.copier = 'xerox';
// 	return originalRes;
// }
// console.log(`Мебель для оффиса: `, officeFurniture);
// console.log(`Метод получить информацию о мебели для оффиса: `, officeFurniture.getFurnitureInfo());


// var homeFurniture = new Furniture('стул', 550);
// homeFurniture.bad = "полуторная кровать";
// homeFurniture.getFurnitureInfo = function () {
// 	var originalRes = Furniture.prototype.getFurnitureInfo.call(this);
// 	originalRes.bad = "полуторная кровать";
// 	return originalRes;
// }
// console.log(`Мебель для дома: `, homeFurniture);
// console.log(`Метод получить информацию о мебели для дома: `, homeFurniture.getFurnitureInfo());

//4
// function Users(name, dateRegistration) {
// 	this.name = name;
// 	this.dateRegistration = new Date();
// }
// Users.prototype.getUsersInfo = function () {
// 	return {
// 		name: this.name,
// 		dateRegistration: this.dateRegistration
// 	};
// };
// var users = new Users('Ruslana', '2017, 04, 26')
// console.log(users);
// console.log(`Получить информацию у Пользователь: `, users.getUsersInfo());

// function Admin (name, dateRegistration) {
// 	this._superAdmin = true;
// 	Users.apply(this, arguments);

// }
// Admin.prototype = Object.create(Users.prototype);
// Admin.prototype.constructor = Admin;
// Admin.prototype.getUsersInfo = function () {
// 	var originalRes = Users.prototype.getUsersInfo.call(this);
// 	originalRes._superAdmin = this._superAdmin;
// 	return originalRes;
// }
// var admin = new Admin('Ruslana', '2017, 04, 26');
// console.log(admin);
// console.log(`Получить информацию у Администратор: `, admin.getUsersInfo());

// function Guest (name, dateRegistration) {
// 	this._validDate = function(){
// 		var _validDate = new Date(dateRegistration);
// 		_validDate.setDate(_validDate.getDate() + 7);
// 		return new Date(_validDate);
// 	}();
// 	Users.apply(this, arguments);
// }
// Guest.prototype = Object.create(Users.prototype);
// Guest.prototype.constructor = Guest;
// Guest.prototype.getUsersInfo = function () {
// 	var originalRes = Users.prototype.getUsersInfo.call(this);
// 	originalRes._validDate = this._validDate;
// 	return originalRes;
// }
// var guest = new Guest('Ruslana', '2017, 04, 26');
// console.log(guest);
// console.log(`Получить информацию у Гость: `, guest.getUsersInfo());

//+Доп.задания на функциональное наследование
//1
// function General() {
// 	this.test = true;
// 	this.parent = true;
// 	this.getInfo = function (){
// 		return{
// 			test: this.test,
// 			parent: this.parent
// 		};
// 	}
// }
// function Child() {
// 	General.call(this);
// 	this.parent = false;
// 	this.child = true;
// 	var originalFunc = this.getInfo;
// 	this.getInfo = function (){
// 		var originalRes = originalFunc.call(this);
// 		originalRes.child = this.child;
// 		return originalRes;
// 	}
// }
// var general = new General();
// var child = new Child();
// console.log(child);
// console.log(child.getInfo());

//2
// function Boy(name) {
// 	this.name = name;
// 	this.good = true;
// 	this.getName = function(){
// 		return 'Мальчика зовут ' + this.name + '. Он ' + (this.good === true ? 'хороший' : 'плохой');
// 	};
// }

// function BadBoy(name) {
// Boy.call(this, name);
// this.good = false;
// var originalFunc = this.getName;
// this.getName = function (){
//  	var originalRes = originalFunc.call(this);
//  	alert (originalRes + '\nНе дружите с ним.');
//  	};
// }
// var boy = new Boy('Ваня');

// var badBoy = new BadBoy('Саша');
// console.log(badBoy.getName());

//3
// function Fruit(name, color) {
// 	this.name = name;
// 	this.color = color;
// 	this.getInfo = function() {
// 		return 'Фрукт - ' + this.name + ", цвет - " + this.color;
// 	}
// }
// function SeetFruit(name, color) {
// 	Fruit.apply(this, arguments);
// 	this.sweetness = true;
// 	this.getSweetness = function() {
// 		return this.sweetness === true ? 'сладкий' : 'кислый';
// 	};
// 	var originalFunc = this.getInfo;
// 	this.getInfo = function(){
// 		var originalRes = originalFunc.call(this);
// 		return originalRes + ', сладость - ' + this.getSweetness(); 
// 	}
// }
// var fruitSweetness = new SeetFruit('Груша', 'желтый');
// console.log(fruitSweetness.getInfo());

//+Доп.задания на прототипное наследование
//1

// function UserProto(name, age) {
// 	this.name = name || 'Unknown';
// 	this.age = age || 0;
// }
// UserProto.prototype.setNewName = function (name) {
// 	this.name = name;
// };
// function NewUser(...args) {
// 	UserProto.apply(this, arguments);
// }
// NewUser.prototype = Object.create(UserProto.prototype);
// NewUser.prototype.constructor = NewUser;

// NewUser.prototype.setNewName = function (name) {
// 	UserProto.prototype.setNewName.call(this, name);
// 	this.changed = 'The field `name` was changed!';
// };
// var userProto = new UserProto('Denis', 28);
// userProto.setNewName('Oleg');
// console.log(userProto);

// var newUser = new NewUser('Ivan', 23);
// newUser.setNewName('David');
// console.log(newUser);

//2
// function Module(name) {
//   if (typeof name !== 'string') {
//     throw 'Enter a name!';
//   }
  
//   this.getName = function () {
//     return name;
//   };
// }

// Module.prototype.getPrettyName = function () {
//   let name = this.getName();  
//   name = name.replace(/\s+/, '_');  
//   return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
// };

// Module.prototype.setGlobalName = function (prefix) {
//   let name = this.getName();
//   this.name = prefix ? prefix + '_' + name : name; 
// };

// var module = new Module('Hallo module');
// console.log(module.getName()); // "Hallo i am module"
// console.log(module.getPrettyName()); // "The module name is Hallo_i am module"
// module.setGlobalName("Parent");
// console.log(module); // Module {name: "Parent_Hallo i am module", getName: function}

// function NewModule(name) {
// 	Module.call(this, name);
// }

// NewModule.prototype = Object.create(Module.prototype);
// NewModule.prototype.constructor = NewModule;

// NewModule.prototype.setGlobalName = function (prefix) {
// 	Module.prototype.setGlobalName.call(this, prefix);
// 	this.length = this.name.length;
// };

// var newModule = new NewModule ('New module');
// console.log(newModule.getPrettyName()); // "The module name is New_module"
// newModule.setGlobalName('Child');
// console.log(newModule); // NewModule {name: "Child_New module", length: 16, getName: function}
