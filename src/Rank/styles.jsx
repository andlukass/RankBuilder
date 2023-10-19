import styled from "styled-components";

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

export const AddButton = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	z-index: 99;
	width: 150px;
	height: 150px;
	/* border: 2px solid black; */
	&.third-button {
		margin-right: 70px;
		margin-top: -20px;
		justify-content: center;
	}
	&.second-button {
		margin-left: 70px;
		margin-top: -40px;
		justify-content: center;
	}
	&.first-button {
		margin-top: -90px;
		justify-content: center;
	}

	@media screen and (max-width: 600px) {
		height: 100px;

		&.third-button {
			margin-right: 40px;
			margin-top: -10px;
		}

		&.first-button {
			margin-top: -55px;
		}

		&.second-button {
			margin-left: 40px;
			margin-top: -30px;
		}
	}

`;

