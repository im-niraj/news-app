// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";


let navbarDiv = document.getElementById('navbar');
let detailed_news = document.getElementById('detailed_news');
navbarDiv.innerHTML = navbar();
let data = JSON.parse(localStorage.getItem('news'));
console.log(data);
let div = document.createElement('div');
let img = document.createElement('img');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let p2 = document.createElement('p');

img.src = data.urlToImage
h3.innerText = data.title;
p.innerText = data.content;
p2.innerText = data.description;
detailed_news.append(img,h3,p)

const search = (e) => {
    
    if(e.key ==='Enter'){
        let inputSearch = document.getElementById('search_input').value;
        localStorage.setItem('searchItem', inputSearch);
        window.location.href= 'search.html';
    }
}
document.getElementById('search_input').addEventListener('keydown', search);

