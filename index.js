const select = document.querySelector("select");
const myInputs = document.querySelectorAll("input");
console.log(myInputs);
let myImg = document.querySelector("img");
let textArea = document.querySelector("textarea");
let urlObj = {};

// Function Definition

const removeHashtag = (str) => {
  return str.replace("#", "");
};

const addPlus = (str) => {
  return str.replaceAll(" ", "+");
};

const createImagePath = () => {
  urlObj.size = select.value;
  urlObj.textColor = removeHashtag(myInputs[2].value);
  urlObj.bgColor = removeHashtag(myInputs[1].value);
  urlObj.name = addPlus(myInputs[0].value);
  let urlPath = `http://via.placeholder.com/${select.value}/${urlObj.bgColor}/${urlObj.textColor}?text=${urlObj.name}`;
  myImg.src = urlPath;
  textArea.value = urlPath;

  textArea.focus();
  textArea.select();

  navigator.clipboard
    .writeText(textArea.value)
    .then(() => {
      console.log("Text copied to the clipboard");
    })
    .catch((err) => {
      console.log("error in copying text:", err);
    });
};

// Function calling
myInputs.forEach((curElem) =>
  curElem.addEventListener("change", createImagePath)
);
select.addEventListener("change", createImagePath);
