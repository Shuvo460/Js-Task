//Syntax Basics & Types


//Agent Details
alert("Agent's Track Details");

let firstName = "Zahed";
let lastName = "Hasan";
let fullName = firstName + ' ' + lastName;  // concatenation string type
//console.log("Agent's Full Name : "+ fullName); 
//console.log("Agent's Full Name : " + firstName+ " " +lastName)

//let myname = `My first name is ${fullName} and my last name is ${lastName}. Age 24.`  // template string type
//console.log(myname)

//let year1 = 2022;
//let html = `                                    // using html templates
//   <h1>Firstname : ${firstName}</h1>
//   <h1>Lastname : ${lastName}</h1>
//   <p>Start working since ${year1}</p>
//`;
//console.log(html);


console.log("Agent Information :")
let uperCase = fullName.toUpperCase();// convert string into uperCase
console.log("Agent's Full Name : "+ uperCase);  
//let lowercase = fullName.toLocaleLowerCase();  // convert string into lower case
//console.log("Agent's Full Name : "+ lowercase); 


const email = "Zahed550@gmail.com"
console.log("Agent's email address : " + email);
const agentAddress = "Dhanmondi, Dhaka"
let index = email.slice(0, 8);
console.log("User name : " + index);
console.log("Agent Office Location : "+agentAddress);


//console.log(fullName[7])  // find specific character of string
//console.log(fullName.length) // lenght off the string
//let index = email.indexOf('@'); // specific character index number
//let index = email.lastIndexOf('a'); // specific last character index number
//let index = email.substr(2,5); // starting index 2 and take next 4 index 
//let index = email.replace('a', 'A');  //replace the character (repace onli first one if multiple found)
//console.log(index);

console.log("\nBooking Histort:")
let totalBookings = 200;
let year = 2022;
console.log("Total Bookings :",totalBookings +","+ " at the year", year+".");
totalBookings = 358;
year = 2023;
console.log("Total Bookings :",totalBookings +","+ " at the year", year+".");


// control flow

//for loop
for(i=0; i<5; i++)
{
    console.log(i);
}
console.log("Loop Ended");


const names = ['shuvo', 'sezan', 'rayhan'];

for(let i=0; i<names.length; i++)
{
    //console.log(names[i]);
    let html =`<div>${names[i]}</div>`
    console.log(html);
}

//while loop
const nam = ['shuvo', 'sezan', 'rayhan'];
let j=0;
while(j<names.length)
{
    console.log(nam[j]);
    j++;
}

//do while

let k=5;
do
{
    console.log(k);
    k--;
}while(k>0);


// if else condition

let password  = 'h#jA6@jkg';

if(password.length >= 8 && password.includes('@', '#', '!'))
{
    console.log('Your password is strong.');
}
else if(password.length <= 8 && password.includes('#', '@', '!'))
{
    console.log('Your password might strong. But you should take minimum 8 character');
}
else
{
    console.log('Your password is week');
}

//break and continue

let score = [20, 50, 3, 77, 45, 99]

for(let i=0; i<score.length; i++)
{
    if(score[i] <= 40)
    {
        continue;
    }
    console.log('\n',score[i]);

    if(score[i] == 77)
    {
        break;
    }
}