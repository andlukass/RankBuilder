import { Container, DayTitle, ModalContainer, PodiumContainer } from "./styles"

import podium from "../assets/podium.png"
import wesley from "../assets/wesley.png"
import lucas from "../assets/lucas.png"
import diogo from "../assets/diogo.png"
import irina from "../assets/irina.png"
import bruno from "../assets/bruno.png"
import andre from "../assets/andre.png"
import cintia from "../assets/cintia.png"
import andrep from "../assets/andrep.png"
import elaine from "../assets/elaine.png"
import daniela from "../assets/daniela.png"

import { useState } from "react";

import RankModal from "./RankModal/RankModal";
import RankSlot from "./RankSlot/RankSlot"

function Rank() {
	const date = new Date();
	const [displayModal, setDisplayModal] = useState('hide');
	const [rankNumber, setRankNumber] = useState(0);
	const competitors = [lucas, diogo, irina, wesley,
					cintia, bruno, andre, andrep, elaine, daniela];
	const [rank1, setRank1] = useState([]);
	const [rank2, setRank2] = useState([]);
	const [rank3, setRank3] = useState([]);

	const updateRank = (rank, competitor, isAdd) => {
		if (rank === 1) {
			if (isAdd){
				setRank1([...rank1, competitor])
			} else {
				setRank1(rank1.filter(item => item !== competitor))
			}
		}
		if (rank === 2) {
			if (isAdd){
				setRank2([...rank2, competitor])
			} else {
				setRank2(rank2.filter(item => item !== competitor))
			}
		}
		if (rank === 3) {
			if (isAdd){
				setRank3([...rank3, competitor])
			} else {
				setRank3(rank3.filter(item => item !== competitor))
			}
		}
	}

	const closeModal = () => {
		if (displayModal === 'show') {
			setDisplayModal('hide')
		}
	}

	const getRank = () => {
		if (rankNumber === 1) {
			return rank1
		}
		if (rankNumber === 2) {
			return rank2
		}
		if (rankNumber === 3) {
			return rank3
		}
	}

	const getCompetitors = () => {
		let allCompetitors = competitors.filter(competitor => !rank1.includes(competitor));
		allCompetitors = allCompetitors.filter(competitor => !rank2.includes(competitor));
		allCompetitors = allCompetitors.filter(competitor => !rank3.includes(competitor));
		return allCompetitors
	}

	const openModal = (rank) => {
		setDisplayModal('show')
		setRankNumber(rank)
	}

	return (
		<>
			<ModalContainer className={displayModal}>
				<RankModal
					rankNumber={rankNumber}
					rank={getRank()}
					allCompetitors={getCompetitors()}
					updateRank={updateRank} />
			</ModalContainer>
			<Container onClick={closeModal}>
				<DayTitle>
					<h1>🔥 DAY {date.getDate()} 🔥</h1>
				</DayTitle>
				<PodiumContainer>
					<img className="podium" src={podium} />
					<RankSlot rank={rank2} rankNumber={2} openModal={() => {openModal(2)}}/>
					<RankSlot rank={rank1} rankNumber={1} openModal={() => {openModal(1)}}/>
					<RankSlot rank={rank3} rankNumber={3} openModal={() => {openModal(3)}}/>
				</PodiumContainer>
			</Container>
		</>
	)
}

export default Rank
