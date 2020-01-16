// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.



// Create five (5) section components, each with a class of message, and with the content of your choosing.

// Holds text that will go into each section
const textArray = ["Random text here", "More random text", "Even more random text", "Look, more random text", "Last random words"];

// Created html for the sections usng the array that holds the text
const createSections = (textArray) => {
    //Will hold the html for each section in an array
    let sectionArray = [];

    //Will iterate through each element in textArray
    textArray.forEach(element => {
        //created individial section element
        let section = document.createElement('section');
        //Adds message class to section element
        section.className = "message";
        // Takes text at certain index and adds that to the section element
        section.textContent = `${element}`;
        // Pushing section to an array with other created sections
        sectionArray.push(section);
    });
    //Sent to array of same name to make it global
    return sectionArray;
}

// Global version of section array from createSection function
const sectionArray = createSections(textArray);

// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment();

// Iterates through section array and appends it to the virtual dom created with createDocumentFragment above
sectionArray.forEach(element => {
    fragment.appendChild(element)
});

// Writes data from virthal document to DOM
const article = document.querySelector("#messages").appendChild(fragment);