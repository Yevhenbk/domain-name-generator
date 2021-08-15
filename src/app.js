/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("myDomain").innerHTML = theDomain2();
  });
};

var PRONOUMS = ["the", "our", "just"];
var NOUNS = ["doit", "malcom", "breathcode"];
var EXTENSIONS = ["com", "it", "de"];

function theDomain2() {
  let domain = [];
  for (var pronoum of PRONOUMS) {
    for (var noun of NOUNS) {
      for (var extension of EXTENSIONS) {
        let firstPart = pronoum.concat(noun);

        if (checkExtension(firstPart, extension)) {
          let auxList = [...firstPart];
          auxList.splice(firstPart.length - extension.length, 0, ".");
          domain.push(auxList.join(""));
        }
      }
    }
  }
  return domain;
}
function checkExtension(domainFirstPart, extension) {
  return domainFirstPart.includes(
    extension,
    domainFirstPart.length - extension.length
  );
}

let firstElement = ["the", "our"];
let secondElement = ["great", "big"];
let thirdElement = ["jogger", "racoon"];
let extentions = [".com", ".net", ".us", ".io"];

function theDomain() {
  let result = [];
  for (let i = 0; i < firstElement.length; i++) {
    for (let j = 0; j < secondElement.length; j++) {
      for (let h = 0; h < thirdElement.length; h++) {
        for (let g = 0; g < extentions.length; g++) {
          result.push(
            firstElement[Math.floor(Math.random() * firstElement.length)] +
              secondElement[Math.floor(Math.random() * secondElement.length)] +
              thirdElement[Math.floor(Math.random() * thirdElement.length)] +
              extentions[Math.floor(Math.random() * extentions.length)]
          );
          return result;
        }
      }
    }
  }
}
