// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import {fetchViaCountry, fetchSearch, append} from '../components/fetch.js';

let navbarDiv = document.getElementById('navbar');
navbarDiv.innerHTML = navbar();


const search = (e) => {
    
    if(e.key ==='Enter'){
        let inputSearch = document.getElementById('search_input').value;
        localStorage.setItem('searchItem', inputSearch);
        window.location.href= 'search.html';
    }
}
const countryContent = (e) => {
    fetchViaCountry(e).then(data => {
            let container = document.getElementById('results');
            container.innerHTML = null;
            console.log(data.articles);
            append(data.articles, container);
        })
}

document.getElementById('search_input').addEventListener('keydown', search);


let countries = document.getElementById('sidebar').children;
function cSearch(){
    console.log(this.id)
    countryContent(this.id);
}

for(let x of countries){
    x.addEventListener('click', cSearch);
    // console.log(x)
}