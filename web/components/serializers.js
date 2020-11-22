import EmbedHTML from './EmbedHTML';
import Figure from './Figure';
import GlossaryLink from './GlossaryLink';
import GlossaryAnchor from './GlossaryAnchor';

const serializers = {
	types: {
		embedHTML: EmbedHTML,
		figure: Figure,
	}, marks: {
		glossaryLink: GlossaryLink,
		glossaryAnchor: GlossaryAnchor,
	},
};

export default serializers;
