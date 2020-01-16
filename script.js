// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.


const fragment = document.createDocumentFragment()

// Create five (5) section components, each with a class of message, and with the content of your choosing.
const textArray = ["Random text here", "More random text", "Even more random text", "Look, more random text", "Last random words"];

const createSections = (textArray) => {
    let sectionArray = [];
    textArray.forEach(element => {
        let section = document.createElement('section');
        section.className = "message";
        section.textContent = `${element}`;
        sectionArray.push(section);
    });
    return sectionArray;
}
const sectionArray = createSections(textArray);

sectionArray.forEach(element => {
    fragment.appendChild(element)
});

const article = document.querySelector("#messages").appendChild(fragment);

console.log(article);