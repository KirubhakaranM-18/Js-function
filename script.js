//BASIC FUNCTIONS
//1
function hello(){
  console.log("Hello Everyone")
}
hello();

//2
function welcome(){
  console.log("Welcome To Javascript")
}
welcome();

//3
function navi(){
  console.log("My Name Is Krish")
}
navi();

//4
function message(){
  console.log("Hello")
  console.log("Welcome To My Page")
  console.log("I Am Krish")
}
message();

//5
function number(){
  for(let numbers=1; numbers<=5; numbers++)
  {console.log(numbers)
  }
}
number();

//6
function check(){
  let age = 20
  if(age>=18){
    console.log("congrats you are eligible")
  }
}
check();

//7
function details(){
  console.log("name : krish")
  console.log("qualification : BA")
  console.log("role : full stack developer")
}
details();

//8
function company(){
  console.log("works at stackly")
}
company();

//9
function invite(){
  console.log("welcome users")
}
invite();
invite();
invite();

//10
function myname(){
  console.log("krish")
}
function myrole(){
  console.log("full stack developer")
}
myname();
myrole();

//PARAMETERS AND ARGUMENTS

//11
function print(hello) {
    console.log(hello);
}
print("hello");

//12
function print1(a,b){
  console.log(a)
  console.log(b)
}
print1("hello", "everone");

//13
function add(a,b){
  console.log(a+b)
}
add(25,35);

//14
function sub(a,b){
  console.log(a-b)
}
sub(100,35);

//15
function multi(a,b){
  console.log(a*b)
}
multi(25,5);

//16
function div(a,b){
  console.log(a/b)
}
div(25,2);

//17
function detail(name,age){
  console.log("name:" , name)
  console.log("age:" , age)
}
detail("krish",26);

//18
function employee(name,role,salary){
  console.log("name:" , name)
  console.log("role:" , role)
  console.log("salary:" , salary)
}
employee("krish",26,"55000 ₹");

//19
function value4(anime,char1,char2,char3,){
  console.log("favanime: ",anime)
  console.log("favcharacter: ",char1)
  console.log("favcharacter: ",char2)
  console.log("favcharacter: ",char3)
}
value4("naruto","uzumaki naruto","itachi","tsunade");

//20
function value5(anime,char1,char2,char3,char4,char5){
  console.log("favanime: ",anime)
  console.log("favcharacter: ",char1)
  console.log("favcharacter: ",char2)
  console.log("favcharacter: ",char3)
  console.log("favcharacter: ",char4)
  console.log("favcharacter: ",char5)
}
value5("onepiece","luffy","zoro","chopper","sanji","robin");

//DEFAULT PARAMETERS

//21
function student(name, department, cgpa="no"){
  console.log("student:",name)
  console.log("department:",department)
  console.log("cgpa:",cgpa)
}
student("krish", "BA",);

//22
function user(name,age=18){
  console.log("name:",name)
  console.log("age:",age)
}
user("krish",);

//23
function userdetails(name,role="developer"){
  console.log("name:",name)
  console.log("role:",role)
}
userdetails("krish")

//24
function studentdetail(name, department, cgpa, disability="no"){
  console.log("student:",name)
  console.log("department:",department)
  console.log("cgpa:",cgpa)
  console.log("disability:",disability)
}
studentdetail("krish", "BA",9,"yes");
studentdetail("krish", "BA",9);

//25
function course(name, duration, mode = "Online") {
    console.log("course:",name);
    console.log("duration:",duration);
    console.log("mode:",mode);
}

course("JavaScript", "3 Months");

//RETURN

//26
function add1(a, b) {
  return a + b;
}
console.log(add1(20,2));

//27
function sub1(a, b) {
  return a - b;
}
console.log(sub1(20,40));

//28
function mult1(a, b) {
  return a * b;
}
console.log(mult1(20,8));

//29
function div1(a, b) {
  return a / b;
}
console.log(div1(20,2));

//30
function sal(){
  return 40000;
}
let mysalary = sal()
console.log(mysalary)

//31
function employeesal(salary) {
  return salary;
}
console.log(employeesal(40000));

//32
function employeename(){
  return "krish";
}
let name = employeename();
console.log(name);

//33
function result(mark){
  if(mark >=35){
    return "pass";
  }else{
    return "fail";
  }    
}
console.log(result(70));
console.log(result(30));

//34
function discount(price,discount){
  return discount;
}
console.log(discount(1000,100))

//35
function calc(a,b){
  return a+b;
}

function aroperation(result){
  console.log("result:",result)
}
let arresult= calc(10,87)
aroperation(arresult)


//OUTER SCOPE

//36
let charname ="krish"
function chaname(){
  console.log(charname)
}
chaname();

//37
let usrname = {
  name: "krish",
  designation:"full stack developer"
}

function usrdetails(){
  console.log(usrname.name);
  console.log(usrname.designation);
}
usrdetails();

//38
let mysalary1 = 50000;
function totsalary(){
  let bonus=5000;
  console.log(mysalary1+bonus)
}
totsalary();

//39
let empdetails={
  name: "krish",
  designation:"full stack developer" ,
  salary:55000
}
function empldetails(){
  console.log(empdetails.name);
  console.log(empdetails.designation);
  console.log(empdetails.salary);
}
empldetails();

//40
let companyName = "Stackly";

function workingcompany() {
    console.log(companyName);
}

function yourcompany() {
    console.log(companyName);
}
workingcompany();
yourcompany();

//NAMED,ANNONYMOUS AND ARROWED

//41
function named(print){
  console.log(print)
}
named("hello everyone")

//42
let annonymous= function(print){
  console.log(print)
}
annonymous("welcome back buddy")

//43
let arrow = (print)=>{
  console.log(print)
}
arrow("how is it going")

//44
let arr = (a,b)=>{
  console.log(a+b)
}
arr(10,20);

//45
function namedAdd(a, b) {
    console.log(a + b);
}

namedAdd(10, 20);

let anonymousAdd = function(a, b) {
    console.log(a + b);
};

anonymousAdd(30, 40);

let arrowAddition = (a, b) => {
    console.log(a + b);
};

arrowAddition(50, 60);

//IIFE

//46
(function() {
    console.log("Hello everyone");
})();

// 47
(function(name) {
    console.log("Hello", name);
})("Krish");

// 48
(function(product, discount) {
    console.log(product, "has a special offer of", discount, "% discount");
})("Laptop", 20);


//CALLBACK & HIGHORDER FUNCTION

//49
function addNumbers(callback, a, b) {
    console.log("Add:", a + b);
    callback(a, b);
}

function callbackFunction(a, b) {
    console.log("Callback values:", a, b);
}

addNumbers(callbackFunction, 10, 20);

// 50
function addValues(callback, a, b) {
    console.log("Add:", a + b);
    callback(a, b);
}

function subValues(a, b) {
    console.log("Sub:", a - b);
}

addValues(subValues, 20, 10);