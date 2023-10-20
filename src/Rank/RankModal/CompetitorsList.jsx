import PropTypes from 'prop-types';
import { ImgCompetitorContainer } from "./styles"

function CompetitorsList({ allCompetitors, rank, rankNumber, updateRank }) {
	return (
		<ImgCompetitorContainer >
			{(allCompetitors !== undefined && rank !== undefined) &&
			allCompetitors.filter(competitor => !rank.includes(competitor))
			.map((competitor, index) => {
				return (
						<img className="img"
							onClick={() => {updateRank(rankNumber, competitor, true)}}
							style={{width: "100px", height: "100px"}}
							src={competitor}
							key={index} />
						)
					})}
		</ImgCompetitorContainer>
	)
}

CompetitorsList.propTypes = {
	rankNumber: PropTypes.number.isRequired,
	allCompetitors: PropTypes.array.isRequired,
	rank: PropTypes.array.isRequired,
	updateRank: PropTypes.func.isRequired,
}

export default CompetitorsList