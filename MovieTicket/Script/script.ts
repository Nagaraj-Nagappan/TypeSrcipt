
let UserIdAutoIncrement = 1000;

let TicketNoAuto=1000;
class User{
    UserId:string;
    Name:string;
    Age:number;
    MobileNo:number;
    constructor(Uname:string,UAge:number,UNumber:number){
        UserIdAutoIncrement++;
        this.UserId="M"+UserIdAutoIncrement;
        this.Name=Uname;
        this.Age=UAge;
        this.MobileNo=UNumber;

    }

}
class MovieTicket{
    TicketNo:string;
    MovieName:string;
    SeatCount:number;
    constructor(ticketNo:string,movie:string,amt:number){
        TicketNoAuto++
        this.SeatCount=amt;
        this.MovieName=movie;
        this.TicketNo="MV"+TicketNoAuto;

    }

}

let UserArrayList: Array<User> = new Array<User>();

let MovieArrayList: Array<MovieTicket> = new Array<MovieTicket>();

function NewUser(){
    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "block";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";



}
function UserLogin(){
    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "block";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
   



    
}
function ValidateUser(){
    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";

    var val=(document.getElementById("logindetail") as HTMLInputElement).value;
    
    
    for (let i = 0; i < UserArrayList.length; i++) {
        if(UserArrayList[i].UserId==val){
            optionDiv.style.display = "block";
        }
        else{
            alert(`Enter the correct User Id`);
            login.style.display = "block"; 
        }
    }

}
function BookTicket(){
    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "block";
    optionDiv.style.display = "none";

}
function ShowHistory(){

    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "block";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";


    for (let i = 0; i < UserArrayList.length; i++) {



    }
}
function ConfirmTicket(){

    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
    alert("booked")
    maindiv.style.display = "block";
}
function AddUser(){
    let maindiv = document.getElementById('maindiv') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let login = document.getElementById('login') as HTMLDivElement;
    let newLogin = document.getElementById('newLogin') as HTMLDivElement;
    let optionDiv = document.getElementById('optionDiv') as HTMLDivElement;
    let historyDiv = document.getElementById('historyDiv') as HTMLDivElement;

    
    historyDiv.style.display = "none";
    maindiv.style.display = "none";
    newUser.style.display = "none";
    login.style.display = "none";
    newLogin.style.display = "none";
    optionDiv.style.display = "none";
    
    var valName=(document.getElementById("name") as HTMLInputElement).value;
    var valAge=parseInt((document.getElementById("age1") as HTMLInputElement).value);
    var valNumber=parseInt((document.getElementById("number1") as HTMLInputElement).value);
    let u1=new User(valName,valAge,valNumber)
    UserArrayList.push(u1);
    alert(`Added Successfully your id is${u1.UserId}`);
    maindiv.style.display = "block";


}