// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import {fetchSearch, append} from '../components/fetch.js';
let navbarDiv = document.getElementById('navbar');
navbarDiv.innerHTML = navbar();

const search1 = () => {
    let x = localStorage.getItem('searchItem');
    console.log(x);
    fetchSearch(x).then(data => {
        let container = document.getElementById('results');
        container.innerHTML = null;
        console.log(data.articles);
        append(data.articles, container);
    })
}
search1();

const search = (e) => {
    
    if(e.key ==='Enter'){
        let inputSearch = document.getElementById('search_input').value;
        localStorage.setItem('searchItem', inputSearch);
        window.location.href= 'search.html';
    }
}
document.getElementById('search_input').addEventListener('keydown', search);

