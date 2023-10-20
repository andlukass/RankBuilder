import PropTypes from 'prop-types';
import { ImagesContainer } from "./styles"

function CompetitorsList({ allCompetitors, rank, rankNumber, updateRank }) {
	return (
		<ImagesContainer>
			{(allCompetitors !== undefined && rank !== undefined) &&
			allCompetitors.filter(competitor => !rank.includes(competitor))
			.map((competitor, index) => {
				return (
						<img className="img"
							onClick={() => {updateRank(rankNumber, competitor, true)}}
							src={competitor}
							key={index} />
						)
					})}
		</ImagesContainer>
	)
}

CompetitorsList.propTypes = {
	rankNumber: PropTypes.number.isRequired,
	allCompetitors: PropTypes.array.isRequired,
	rank: PropTypes.array.isRequired,
	updateRank: PropTypes.func.isRequired,
}

export default CompetitorsList