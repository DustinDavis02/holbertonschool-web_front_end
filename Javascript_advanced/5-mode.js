function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let p = document.createElement('p');
    p.innerText = 'Welcome Holberton!';
    document.body.appendChild(p);

    let btnSpooky = document.createElement('button');
    btnSpooky.innerText = 'Spooky';
    btnSpooky.onclick = spooky;
    document.body.appendChild(btnSpooky);

    let btnDarkMode = document.createElement('button');
    btnDarkMode.innerText = 'Dark mode';
    btnDarkMode.onclick = darkMode;
    document.body.appendChild(btnDarkMode);

    let btnScreamMode = document.createElement('button');
    btnScreamMode.innerText = 'Scream mode';
    btnScreamMode.onclick = screamMode;
    document.body.appendChild(btnScreamMode);
}

main();