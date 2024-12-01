let userinput = prompt("Enter your age : ");
let age = +userinput;

if (age < 18 || age > 80){
    alert("You are not in the age range for voting, SORRY!")
}else if(age >= 18 && age <= 80){
    alert("You are eligible for voting")
    let candidate = prompt("Inter D to vote for Donald Or inter K to vote for kamala")
    if (candidate === "D"){
        alert("you are successesfully voded Donald")
    }else if(candidate === "K"){
        alert("you are successesfully voded kamala")
    } 
    else{
        alert("sorry! reload the page and try again Inter D or K")
    }
}
else{
    alert("Input your age as a number Please!")
}