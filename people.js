const week = 5
const year = 52
const tax = 15/100
// FETCH and READ the people.json disk file
fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON file and log to console
    data.forEach(person => {
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(getGender(person));
      console.log(Pronounce(person));
      console.log(getpaid(person));
      console.log(getSalary(person));
      console.log(getSalary_After_tax(person));
      log.innerHTML += `<p>${getFullName(person)}</p>`;
      log.innerHTML += `<p>${getAge(person)}</p>`;
      log.innerHTML += `<p>${getGender(person)}</p>`;
      log.innerHTML += `<p>${Pronounce(person)}</p>`;
      log.innerHTML += `<p>${getpaid(person)}</p>`;
      log.innerHTML += `<p>${getSalary(person)}</p>`;
      log.innerHTML += `<p>${getSalary_After_tax(person)}</p>`;
      log.innerHTML += `</br>`;
    });
  })
//Function to combine name
function getFullName(person) {
    return `${person.firstname} ${person.lastname}`;
}
//Function to get age
function getAge(person) {    
    return `${person.firstname} is ${new Date().getFullYear() - 
      new Date(person.birthday).getFullYear()} years old.`; 
}
//Function to get gender
function getGender(person){
    return `${person.firstname} is ${person.gender}.`;
}
//Function to get paid per hour
function getpaid(person){
    return `${person.firstname} gets paid $${person.paid} per hour.`;
}
//Function to calculate salary
function getSalary(person){
    return `${person.firstname}'s salary is $${(((person.paid * 8) * week) * year)}.`
}
//Function to calculate tax
function getTax(person){
    return ((((person.paid * 8) * week * year)) * tax)
}
//Function to calculate salary after tax
function getSalary_After_tax(person){
    return `${person.firstname}'s salary after tax is $${(((person.paid * 8) * week) * year) - ((((person.paid * 8) * week * year)) * tax)}.`
}
// Function to detrmine pronounce
function Pronounce(person) {
    switch(person.gender){
      case "female": 
        return`${person.firstname} ${person.lastname} pronounce is she/her.`;
        break;
      case "male":
        return `${person.firstname} ${person.lastname} pronounce is he/him.`;
        break;
      default:
        return `${person.firstname} ${person.lastname} pronounce is they/them.`;
    }
}
//output same info to html file
const log = document.getElementById("log");
