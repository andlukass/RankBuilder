import PropTypes from 'prop-types';
import { ImgRankContainer } from "./styles"

function RankList({ rank, rankNumber, updateRank }) {
	return (
		<ImgRankContainer>
				{rank !== undefined ?
				rank.map((competitor, index) => {
					return (
						<img onClick={() => {updateRank(rankNumber, competitor, false)}}
						className="img"
						style={{width: "100px", height: "100px"}}
						src={competitor}
						key={index} />
						)
					})
					: <p>Adicione alguém ao pódio</p>
				}
		</ImgRankContainer>
	)
}

RankList.propTypes = {
	rankNumber: PropTypes.number.isRequired,
	rank: PropTypes.array.isRequired,
	updateRank: PropTypes.func.isRequired,
}

export default RankList