import PropTypes from 'prop-types';
import { Container } from "./styles"
import CompetitorsList from './CompetitorsList';
import RankList from './RankList';

function RankModal({ rankNumber, allCompetitors, rank, updateRank }) {
	return (
		<Container > 
			<h2> No Top {rankNumber}</h2>
			<RankList 
				updateRank={updateRank}
				rank={rank}
				rankNumber={rankNumber} />
			<h2> Adicionar ao Top {rankNumber}</h2>
			<CompetitorsList 
				allCompetitors={allCompetitors}
				updateRank={updateRank}
				rank={rank}
				rankNumber={rankNumber} />
		</Container>
	)
}

RankModal.propTypes = {
	rankNumber: PropTypes.number.isRequired,
	allCompetitors: PropTypes.array.isRequired,
	rank: PropTypes.array.isRequired,
	updateRank: PropTypes.func.isRequired,
}

export default RankModal
