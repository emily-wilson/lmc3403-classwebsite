import React from 'react';
import PropTypes from 'prop-types';

const GlossaryAnchor = ({ mark, children }) => {
	return (
		<a id={mark.anchor}>{children}</a>
	);
};

GlossaryAnchor.propTypes = {
	mark: PropTypes.shape({
		anchor: PropTypes.string,
	}),
	children: PropTypes.arrayOf(PropTypes.node),
};

export default GlossaryAnchor;
