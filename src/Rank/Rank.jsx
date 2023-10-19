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
		<PodiumContainer >
			<img className="podium" src={podium} alt="podium" />
			<AddButton
			className="second-button"
			rank={rank2} 
			onClick={() => {
				setModalRank(2)
				setDisplayModal('flex')
			}}>
				{rank2.length > 0 ? rank2.map((competitor, index) => {
					return (
						<img  style={{
						width: rank2.length > 1 ? "50%" : "100%",
						height: rank2.length > 1 ? "50%" : "100%", }}
						src={competitor} key={index} />
					)
				}) : <p>Adicione alguém ao pódio</p>}
			</AddButton>
			<AddButton
			className="first-button"
			rank={rank1}
			onClick={() => {
				setModalRank(1)
				setDisplayModal('flex')
			}}>
				{rank1.length > 0 ? rank1.map((competitor, index) => {
					return (
						<img  style={{
						width: rank1.length > 1 ? "50%" : "100%",
						height: rank1.length > 1 ? "50%" : "100%", }}
						src={competitor} key={index} />
					)
				}) : <p>Adicione alguém ao pódio</p>}
			</AddButton>
			<AddButton 
			className="third-button"
			rank={rank3}
			onClick={() => {
				setModalRank(3)
				setDisplayModal('flex')
			}}>
				{rank3.length > 0 ? rank3.map((competitor, index) => {
					return (
						<img  style={{
						width: rank3.length > 1 ? "50%" : "100%",
						height: rank3.length > 1 ? "50%" : "100%", }}
						src={competitor} key={index} />
					)
				}) : <p>Adicione alguém ao pódio</p>}
			</AddButton>
		</PodiumContainer>
	</Container>
	</>
  )
}


export default Rank
