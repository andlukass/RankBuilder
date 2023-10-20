import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	z-index: 99;
	width: 150px;
	height: 150px;
	&.button3 {
		margin-right: 70px;
		margin-top: -20px;
	}
	&.button2 {
		margin-left: 70px;
		margin-top: -40px;
	}
	&.button1 {
		margin-top: -90px;
	}

	.onePic {
		width: 100%;
		height: 100%;
	}

	.twoMorePics {
		width: 50%;
		height: 50%;
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