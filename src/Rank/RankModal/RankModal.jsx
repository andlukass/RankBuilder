import { Container, ImgCompetitorContainer, ImgRankContainer } from "./styles"

function RankModal(props) {
	const modalRank = props.modalRank;
	const competitors = props.allCompetitors;
	const removeFromRank = props.removeFromRank;
	const addToRank = props.addToRank;


	const CompetitorsList = () => {
		return (
			<ImgCompetitorContainer >
				{(competitors !== undefined && props.rank !== undefined) &&
				competitors.filter(competitor => !props.rank.includes(competitor))
				.map((competitor, index) => {
					return (
							<img className="img" onClick={() => {addToRank(modalRank, competitor)}} style={{width: "100px", height: "100px"}} src={competitor} key={index} />
							)
						})}
			</ImgCompetitorContainer>
		
		)
	}

	const RankList = () => {
		return (
			<ImgRankContainer>
				{props.rank !== undefined ?
				props.rank.map((competitor, index) => {
					return (
						<img  onClick={() => {removeFromRank(modalRank, competitor)}} className="img" style={{width: "100px", height: "100px"}} src={competitor} key={index} />
						)
					})
					: <p>Adicione alguém ao pódio</p>
				}
			</ImgRankContainer>
		)
	}



  return (
	<Container style={{display: props.display}}>
		<h2> No Top {modalRank}</h2>
		<RankList />
		<h2> Adicionar ao Top {modalRank}</h2>
		<CompetitorsList />
	</Container>

  )
}


export default RankModal
