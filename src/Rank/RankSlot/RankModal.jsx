import { AddButton } from "./styles"

function RankSlot(props) {

	const styleName = () => {
		if (props.rankNumber === 1) {
			return "first-button"
		}
		if (props.rankNumber === 2) {
			return "second-button"
		}
		if (props.rankNumber === 3) {
			return "third-button"
		}
	}

  return (
	<AddButton onClick={props.openModal} className={styleName()}>
				{props.rank.length > 0 ? props.rank.map((competitor, index) => {
					return (
						<img  style={{
						width: props.rank.length > 1 ? "50%" : "100%",
						height: props.rank.length > 1 ? "50%" : "100%", }}
						src={competitor} key={index} />
					)
				}) : <p>Adicione alguém ao pódio</p>}
	</AddButton>

  )
}


export default RankSlot
