const names = ['John', 'Paul', 'Jones'];

names.forEach(name => {
    const test = document.createElement("p");
    test.innerText = name;
    document.body.appendChild(test);
});