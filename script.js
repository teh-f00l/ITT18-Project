var db = new alasql.Database()	

db.exec('CREATE TABLE users(id int PRIMARY KEY, userName varchar(255), pass varchar(255))');
db.exec('INSERT INTO users VALUES(0, "Mike", "12345")');
db.exec('INSERT INTO users VALUES(1, "Marvin", "12355")');
var users = db.exec('SELECT * FROM users');
console.log(users[0].userName)




function login(){
	var a = document.getElementById("uName").value, b = document.getElementById("uPass").value
	console.log(a, b)
}








