import React from 'react';
import PropTypes from 'prop-types';

import styles from './GlossaryTerm.module.css';

const GlossaryTerm = ({ node }) => {
	return (
		<div className={styles.tooltip}>{node.term}
			<span className={styles.tooltiptext}>{node.definition}</span>
		</div>
	);
};

GlossaryTerm.propTypes = {
	node: PropTypes.shape({
		term: PropTypes.string,
		definition: PropTypes.string,
	}),
};

export default GlossaryTerm
