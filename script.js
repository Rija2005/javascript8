//for loop
// //flag;use yes/no                                            
// let cleanestCities=["Calgary","Honlulu","Adelaide","Helsinki","Minne","New York"]
// let cityToCheck="New York"
// let matchFound = "no";
// for (let i = 0; i <= 4; i++){
//  if (cityToCheck === cleanestCities[i]) {
// matchFound = "yes";
//  alert("It's one of the cleanest cities");
 
//  }

//  else if (matchFound === "no") {
//     alert("It's not on the list")}
//     break;
//  }
//for bullian use true /false
// let nameOfStudent = ["ali", "Ahmed", "Hira", "Fatima", "Nisa", "Faraz","Rahila"];
// let bestStudent = "Rahila";
// let matchFound = false;

// for (let i = 0; i < nameOfStudent.length; i++) {
//     if (bestStudent === nameOfStudent[i]) {
//         matchFound = true;
//         alert(bestStudent + " is one of the best students.");
//         break;
//     }
// }

// if (matchFound === false) {
//     alert(bestStudent + " should become a best student.");
// }
// //array length;a/c to length
// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// let Bestfruit = "Strawberry"; 
// let matchFound = false;

// for (let i = 0; i < fruits.length; i++) {
//     if (Bestfruit === fruits[i]) {
//         matchFound = true;
//         alert("It's one of the best fruits.");
//         break; 
//     }
// }

// if (matchFound===false) { 
//     alert("It's not on the list.");
// }
for (let a=1; a<=5; a++){
    for(let b =1; b<=a; b++){
    document.write(b + "")
    }
    document.write("<br>")
}
for (let a=5; a>=1; a--){
    for(let b =a; b>=1; b--){
    document.write(b + "")
    }
    document.write("<br>")
}
for (let a=5; a>=1; a--){
    for(let b =a; b>=1; b--){
    document.write("*"+ "")//for making prymaid
    }
    document.write("<br>")
}
for (let a=5; a>=1; a--){
    for(let b =a; b>=1; b--){
    document.write("@" + "")
    }
    document.write("<br>")
}