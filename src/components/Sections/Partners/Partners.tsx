import React from 'react';
import { Section } from '../Section';
import { PARTNERS } from 'data/partners';
import { PartnerItem } from './Item';

export const Partners: React.FC = () => {
	return (
		<Section title="Miejsca" year="Przyjazne">
			<ul className="itv-partners">
				{PARTNERS.map((partner, index) => (
					<PartnerItem key={index} partner={partner} index={index} />
				))}
			</ul>
		</Section>
	);
};