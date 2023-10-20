import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	width: 80vw;
	max-width: 500px;
	height: 70vh;
	border: 2px solid black;
	&.show{
		display: flex;
	}
	&.hide{
		display: none;
	}
`;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const DayTitle = styled.div`
	z-index: 3;
	position: relative;
	font-family: Courier, monospace;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 270px;
	color: white;
	background-color: black;
`;

export const PodiumContainer = styled.div`
	margin-top: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	width: 100%;
	max-width: 600px;
	height: 200px;
	@media screen and (max-width: 600px) {
		margin-top: 20px;
	}
	/* border: 2px solid black; */
.podium {
	z-index: 1;
	position: absolute;
	width: 100%;
	max-width: 600px;
  }
`;
