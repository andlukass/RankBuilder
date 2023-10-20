import { Container } from "./styles"
import Pictures from "./Pictures";
import PropTypes from 'prop-types';

function RankSlot({rankNumber, rank, openModal}) {

	return (
		<Container onClick={openModal} className={`button${rankNumber}`}>
			{rank.length > 0 ? <Pictures rank={rank} /> : <p>Adicione alguém ao pódio</p>}
		</Container>
	)
}

RankSlot.propTypes = {
	rankNumber: PropTypes.number.isRequired,
	rank: PropTypes.array.isRequired,
	openModal: PropTypes.func.isRequired,
}

export default RankSlot
