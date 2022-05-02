const fetchViaCountry = async (country) => {
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`);
        let data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

const fetchSearch = async (query) => {
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

const append = (data, container) => {
    data.forEach(({title, urlToImage, description, content}) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'news')
        div.addEventListener('click', ()=> {
            newsFun(title,urlToImage, description, content)
        })
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'imgDiv')
        let img = document.createElement('img');
        let titleText = document.createElement('h3');
        titleText.setAttribute('class', 'title')
        let desc = document.createElement('p');
        desc.setAttribute('class', 'descP')
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        img.src = urlToImage;
        titleText.innerText = title;
        desc.innerText = description;
        imgDiv.append(img);
        contentDiv.append(titleText,desc);
        div.append(imgDiv, contentDiv);  
        container.append(div);

    });
}

function newsFun(title,urlToImage, description, content){
    let obj = {
        title:title,
        urlToImage:urlToImage,
        description:description,
        content:content
    }
    localStorage.setItem('news', JSON.stringify(obj));
    window.location.href = 'news.html';
}


export {fetchViaCountry, fetchSearch, append};