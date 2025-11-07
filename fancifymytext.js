// hello world function for bigger button
function helloWurld() {
  alert("Hello, world!");
}

//helper function to get text area
function getTextArea() {
    return document.getElementById("text")
}

//function to make text bigger
function biggerText() {
const textArea = getTextArea();

//change font size to 24pt
textArea.style.fontSize = "24pt";
}

// FancySchmancy function 
function setFancy(radio) {
    if (!radio.checked) return; //only activate when checked
    
    helloWurld();

    const textArea = getTextArea();
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

// Boring function sets text to basic values
function setBoring(radio) {
    if (!radio.checked) return; //only activate when checked

    const textArea = getTextArea();
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

//function to uppercase and add "-Moo" to last word of each sentence
function moo() {
  const textArea = getTextArea();

  //make all text uppercase
  let text = textArea.value.toUpperCase();

  //split on periods, add "-Moo" to the last word of each sentence, rejoin with periods
  const sentences = text
    .split(".") //split text into sentences whenever a period is present
    .map(s => s.trim()) //removes ectra spaces from start and end of each sentence
    .map(s => {
      const parts = s.split(/\s+/); //split sentence into words based on spaces
      parts[parts.length - 1] = parts[parts.length - 1] + "-Moo"; //adds moo to end of last word
      return parts.join(" "); //joins words back into single sentence 
    });

  //put text back (ensure a trailing period if we had any sentences)
  textArea.value = sentences.length ? sentences.join(". ") + "." : text;
}