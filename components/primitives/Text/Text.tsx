import tw from "twin.macro";
import styled from "styled-components";

const Text = styled.div``;

export const InlineText = styled(Text)`
	display: inline;
`;

// export const MaxLineText = tw(Text)<{ lines: number }>`
// 	overflow: hidden;
// 	/* position: relative;  */
// 	line-height: 1.2em;
// 	max-height: ${(props) => props.lines * 1.2}em;
// 	text-align: justify;
// 	/* margin-right: -1em;
//     padding-right: 1em; */
// 	/* :before {
//         content: '...';
//         position: absolute;
//         right: 0;
//         bottom: 0;
//     }
//     :after {
//         content: '';
//         position: absolute;
//         right: 0;
//         width: 1em;
//         height: 1em;
//         margin-top: 0.2em;
//         background: white;
//     } */
// `;

export default Text;
