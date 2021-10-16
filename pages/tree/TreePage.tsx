import React from "react";
import structuredData from "../../structuredData.json";
import Tree from "../../components/Tree";

const TreePage = () => {
	return <Tree person={structuredData[0]} />;
};

export default TreePage;
