import EmbedHTML from './EmbedHTML';
import Figure from './Figure';
import GlossaryTerm from './GlossaryTerm';

const serializers = {
	types: {
		embedHTML: EmbedHTML,
		figure: Figure,
		glossaryTerm: GlossaryTerm,
	},
};

export default serializers;
