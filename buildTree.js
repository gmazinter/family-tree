// import lodash from "lodash";
// import rawData from "./rawData.json";
const _ = require("lodash");
const rawData = require("./rawData.json");

// const buildTree = (rawData) => {};
const finalTree = {};

// const sortByBirthday = (rawData) => {
// 	const peopleArray = Object.values(rawData);
// 	const sortedByAge = _.sortBy(peopleArray, "birthday");
// 	return sortedByAge.reverse();
// };

// const sorted = sortByBirthday(rawData);

const findParents = (person, data) => {
	const { mother: motherName, father: fatherName } = person;
	const mother = data.find((person) => person.name === motherName);
	const father = data.find((person) => person.name === fatherName);
	addNuclearFamily(person, mother, father);
};

const addNuclearFamily = (person, mother, father) => {
	if (!finalTree.person) {
		finalT;
	}
};
