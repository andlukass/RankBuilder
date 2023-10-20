import PropTypes from 'prop-types';

function Pictures({ rank }) {

	const getStyle = rank.length > 1 ? "twoMorePics" : "onePic"

	return (
		rank.map((competitor, index) => {
			return (
				<img className={getStyle} src={competitor} key={index} />
			)
		})
	)
}

Pictures.propTypes = {
	rank: PropTypes.array.isRequired
}

export default Pictures