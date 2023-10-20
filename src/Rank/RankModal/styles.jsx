import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	width: 80vw;
	max-width: 500px;
	height: 70vh;
	border-radius: 30pt;
	background-color: #fff;
	border: 2px solid black;
	padding: 10pt;
`;

export const ImagesContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 70vw;
	max-width: 400px;
	flex-wrap: wrap;
	border: 1px solid black;
	overflow-y: scroll;
	.img {
		width: 100px;
		height: 100px;
		margin: 5px;
	}
	&.upperBox{
		min-height: 130px;
	}
`;
