import render from "./render.js";

let newLocation = document.getElementById('myList');

async function main (){
    let userData = await fetch('https://reqres.in/api/users');
    let myResponse = await userData;

    if(myResponse.ok){
        let data = (await myResponse.json()).data;

        render(newLocation, data)
    }
}


main();