const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(fs.readFileSync("html-pages/basic-functions.html"));
const sourceFileIntermediate = String(
   fs.readFileSync("html-pages/intermediate-functions.html")
);
const sourceFileFunctional = String(
   fs.readFileSync("html-pages/functional-functions.html")
);
const sourceFileAlgorithm = String(
   fs.readFileSync("html-pages/algorithm-functions.html")
);

const components = getComponents(sourceFile);
const components2 = getComponents(sourceFileIntermediate);
const components3 = getComponents(sourceFileFunctional);
const components4 = getComponents(sourceFileAlgorithm);

const componentsObjs = components.reverse().map((component, index) => {
   //this reverses the object in the array, so the oldest function appears first
   return {
      name: getName(component)[0], // getName takes the parameter of component and creates an array of data, the 0 index allows us to only return the name and nothing else
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length, // returns length or number of inputs for a function
      type: "basic", // all scraping basic.html
      typeNum: 100, // basic type
      isFavorite: false, // default
      order: 100 + index, //specifies index as parameter which increments order number by index
   };
});
const componentsIntermediate = components2.reverse().map((component, index) => {
   return {
      name: getName(component)[0], // getName takes the parameter of component and creates an array of data, the 0 index allows us to only return the name and nothing else
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length, // returns length or number of inputs for a function
      type: "intermediate", // all scraping basic.html
      typeNum: 200, // basic type
      isFavorite: false, // default
      order: 200 + index,
   };
});
const componentsFunctional = components3.reverse().map((component, index) => {
   return {
      name: getName(component)[0], // getName takes the parameter of component and creates an array of data, the 0 index allows us to only return the name and nothing else
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length, // returns length or number of inputs for a function
      type: "functional", // all scraping basic.html
      typeNum: 300, // basic type
      isFavorite: false, // default
      order: 300 + index,
   };
});
const componentsAlgorithm = components4.reverse().map((component, index) => {
   return {
      name: getName(component)[0], // getName takes the parameter of component and creates an array of data, the 0 index allows us to only return the name and nothing else
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length, // returns length or number of inputs for a function
      type: "algorithm", // all scraping basic.html
      typeNum: 400, // basic type
      isFavorite: false, // default
      order: 400 + index,
   };
});

var orderObjs = componentsObjs.concat(
   //.concat can take multiple parametes to combine multiple arrays
   componentsIntermediate,
   componentsFunctional,
   componentsAlgorithm
);

const targetFile = "./dist/dist.json";

fs.writeFileSync(targetFile, JSON.stringify(orderObjs)); //creates a new file containing this data to the above const
