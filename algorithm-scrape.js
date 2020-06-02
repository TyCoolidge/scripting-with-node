const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(
   fs.readFileSync("html-pages/algorithm-functions.html")
);

const components = getComponents(sourceFile);

const componentsObjs = components.map((component) => {
   return {
      name: getName(component)[0], // getName takes the parameter of component and creates an array of data, the 0 index allows us to only return the name and nothing else
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length, // returns length or number of inputs for a function
      type: "algorithm", // all scraping basic.html
      typeNum: 400, // basic type
      isFavorite: false, // default
   };
});

const reversedObjs = componentsObjs.reverse(); //reverses the elements in an array

const orderObjs = [];
for (let i = 0; i < reversedObjs.length; i++) {
   const obj = componentsObjs[i]; //finds individual objects or index
   obj.order = obj.typeNum + i; //takes the typeNum value (100) + whatever index we are on
   orderObjs.push(obj); //pushed that new object number to main array
}

console.log(orderObjs.reverse());

const targetFile = "./json-files/algorithm.json";

fs.writeFileSync(targetFile, JSON.stringify(orderObjs)); //creates a new file containing this data to the above const
