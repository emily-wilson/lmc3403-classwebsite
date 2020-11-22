import React from 'react';
import PropTypes from 'prop-types';

const GlossaryLink = ({ mark, children }) => {
	return (
		<a href={`https://lmc-3403-classwebsite.netlify.app/glossary/#${mark.anchor}`}>
			{children}
		</a>
	);
};

GlossaryLink.propTypes = {
	mark: PropTypes.shape({
		anchor: PropTypes.string,
	}),
	children: PropTypes.arrayOf(PropTypes.node),
};

export default GlossaryLink;
