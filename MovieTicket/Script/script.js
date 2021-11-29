var UserIdAutoIncrement = 1000;
var TicketNoAuto = 1000;
var User = /** @class */ (function () {
    function User(Uname, UAge, UNumber) {
        UserIdAutoIncrement++;
        this.UserId = "M" + UserIdAutoIncrement;
        this.Name = Uname;
        this.Age = UAge;
        this.MobileNo = UNumber;
    }
    return User;
}());
var MovieTicket = /** @class */ (function () {
    function MovieTicket(ticketNo, movie, amt) {
        TicketNoAuto++;
        this.SeatCount = amt;
        this.MovieName = movie;
        this.TicketNo = "MV" + TicketNoAuto;
    }
    return MovieTicket;
}());
var UserArrayList = new Array();
var MovieArrayList = new Array();
function NewUser() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "block";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
}
function UserLogin() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "block";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
}
function ValidateUser() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    var val = document.getElementById("logindetail").value;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == val) {
            optionDiv.style.display = "block";
        }
        else {
            alert("Enter the correct User Id");
        }
    }
}
function BookTicket() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "block";
    optionDiv.style.display = "none";
}
function ShowHistory() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "block";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
    for (var i = 0; i < UserArrayList.length; i++) {
    }
}
function ConfirmTicket() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
    alert("booked");
    maindiv.style.display = "block";
}
function AddUser() {
    var maindiv = document.getElementById('maindiv');
    var newUser = document.getElementById('newUser');
    var login = document.getElementById('login');
    var newLogin = document.getElementById('newLogin');
    var optionDiv = document.getElementById('optionDiv');
    var historyDiv = document.getElementById('historyDiv');
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
    var valName = document.getElementById("name").value;
    var valAge = parseInt(document.getElementById("age1").value);
    var valNumber = parseInt(document.getElementById("number1").value);
    var u1 = new User(valName, valAge, valNumber);
    UserArrayList.push(u1);
    alert("Added Successfully your id is".concat(u1.UserId));
    maindiv.style.display = "block";
}
