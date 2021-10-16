import React from "react";
import { Flex, Box, Card, Text } from "../primitives";
import moment from "moment";

interface Identity {
	firstName: string;
	lastName: string;
	birthday: string;
	mother: string;
	father: string;
	spouse?: any;
}
interface Person {
	identity: Identity;
	descendents?: [];
}

interface PersonCardProps {
	name: string;
	birthday: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
	name,
	birthday,
}: PersonCardProps) => {
	const birthdayString = moment(birthday).format("MMMM Do YYYY, h:mm:ss a");

	return (
		<Card width="300px" boxShadow="small" bg="pink" m={2}>
			<Text>{`Name: ${name}`}</Text>
			{birthday && <Text>{`Birthday: ${birthdayString}`}</Text>}
		</Card>
	);
};

const Tree = ({ person }: any) => {
	const recursivelyRenderTree = (person: any): JSX.Element => {
		const { firstName, lastName, birthday, spouse } = person.identity || {};
		const fullName = `${firstName} ${lastName}`;
		const spouseFullName =
			typeof spouse !== "string"
				? `${spouse?.firstName} ${spouse?.lastName} `
				: spouse;
		const spouseBirthday = spouse?.birthday;
		const childlessDescendents = person.descendents?.every(
			(desc: any) => !desc.descendents
		);
		if (!person?.descendents?.length) {
			return <PersonCard name={fullName} birthday={birthday} />;
		}
		return (
			<Flex flexDirection="column" alignItems="center">
				<Flex justifyContent="center">
					<PersonCard name={fullName} birthday={birthday} />
					{spouse && (
						<PersonCard name={spouseFullName} birthday={spouseBirthday} />
					)}
				</Flex>
				<Flex flexDirection={childlessDescendents ? "column" : "row"}>
					{person.descendents.map((descendent: any) =>
						recursivelyRenderTree(descendent)
					)}
				</Flex>
			</Flex>
		);
	};

	return recursivelyRenderTree(person);
};

export default Tree;
