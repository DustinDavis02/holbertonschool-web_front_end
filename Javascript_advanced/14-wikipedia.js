function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(xhr.responseText);
            let page = response.query.pages;
            let extract = page[Object.keys(page)[0]].extract;
            callback(extract);
        }
    };

    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    xhr.open('GET', url, true);
    xhr.send();
}

queryWikipedia(createElement);
