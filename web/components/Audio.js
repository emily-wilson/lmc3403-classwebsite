import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ node }) => {
	return (
		<div>
			<audio>
				<source src={node.url} />
			</audio>
		</div>
	);
};

Audio.propTypes = {
	node: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}),
};

export default Audio;
