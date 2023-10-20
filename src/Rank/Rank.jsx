import { AddButton, Container, DayTitle, PodiumContainer } from "./styles"

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
import RankSlot from "./RankSlot/RankModal"

function Rank() {
	const date = new Date();
	const [displayModal, setDisplayModal] = useState('none');
	const [modalRank, setModalRank] = useState(0);
	const competitors = [lucas, diogo, irina, wesley,
					cintia, bruno, andre, andrep, elaine, daniela];
	const [rank1, setRank1] = useState([]);
	const [rank2, setRank2] = useState([]);
	const [rank3, setRank3] = useState([]);

	const addToRank = (rank, competitor) => {
		if (rank === 1) {
			setRank1([...rank1, competitor])
		}
		if (rank === 2) {
			setRank2([...rank2, competitor])
		}
		if (rank === 3) {
			setRank3([...rank3, competitor])
		}
	}

	const removeFromRank = (rank, competitor) => {
		if (rank === 1) {
			setRank1(rank1.filter(item => item !== competitor))
		}
		if (rank === 2) {
			setRank2(rank2.filter(item => item !== competitor))
		}
		if (rank === 3) {
			setRank3(rank3.filter(item => item !== competitor))
		}
	}

	const closeModal = () => {
		if (displayModal === 'flex') {
			setDisplayModal('none')
		}
		console.log(rank1)
	}

	const getRank = () => {
		if (modalRank === 1) {
			return rank1
		}
		if (modalRank === 2) {
			return rank2
		}
		if (modalRank === 3) {
			return rank3
		}
	}

	const getCompetitors = () => {
		// remove from competitors array, all values inside rank1 rank2 and rank3
		let allCompetitors = competitors.filter(competitor => !rank1.includes(competitor));
		allCompetitors = allCompetitors.filter(competitor => !rank2.includes(competitor));
		allCompetitors = allCompetitors.filter(competitor => !rank3.includes(competitor));
		return allCompetitors
	}

	const openModal = (rank) => {
		setDisplayModal('flex')
		setModalRank(rank)
	}

  return (
	<>
		<RankModal display={displayModal}
					modalRank={modalRank}
					rank={getRank()}
					allCompetitors={getCompetitors()}
					addToRank={addToRank}
					removeFromRank={removeFromRank} />
	<Container onClick={closeModal}>
		<DayTitle>
			<h1>🔥 DAY {date.getDate()} 🔥</h1>
		</DayTitle>
		<PodiumContainer>
			<img className="podium" src={podium} alt="podium" />
			<RankSlot rank={rank2} rankNumber={2} openModal={() => {openModal(2)}}/>
			<RankSlot rank={rank1} rankNumber={1} openModal={() => {openModal(1)}}/>
			<RankSlot rank={rank3} rankNumber={3} openModal={() => {openModal(3)}}/>
		</PodiumContainer>
	</Container>
	</>
  )
}


export default Rank
