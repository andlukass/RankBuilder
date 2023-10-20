import PropTypes from 'prop-types';
import { ImagesContainer } from "./styles"

function RankList({ rank, rankNumber, updateRank }) {
	return (
		<ImagesContainer className='upperBox'>
			{rank !== undefined && rank.length > 0 ?
				rank.map((competitor, index) => {
				return (
					<img className="img"
					onClick={() => {updateRank(rankNumber, competitor, false)}}
					src={competitor}
					key={index} />
					)
				}) : <p>Selecione uma foto</p>
			}
		</ImagesContainer>
	)
}

RankList.propTypes = {
	rankNumber: PropTypes.number.isRequired,
	rank: PropTypes.array.isRequired,
	updateRank: PropTypes.func.isRequired,
}

export default RankList