import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

export const PartnerItem: React.FC<{ partner: any; index: number }> = ({ partner, index }) => {
	const itemRef = useRef(null);
	const isInView = useInView(itemRef, { once: true, amount: 0.1 });

	const formatDataAsList = (data: string) => {
		if (!data) return null;

		const lines = data.trim().split('\n');

		return (
			<ul className="contact-data">
				{lines.map((line, i) => (
					<li key={i}>{line.trim()}</li>
				))}
			</ul>
		);
	};

	return (
		<li
			ref={itemRef}
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateY(0)' : 'translateY(20px)',
				transition: `opacity 0.3s ease-out ${index * 0.025}s, transform 0.3s ease-out ${index * 0.025}s`
			}}
		>
			<h3>{partner.name}</h3>
			<img src={partner.image} alt={partner.name} />
			<p>{partner.description}</p>
			{partner.data && formatDataAsList(partner.data)}
		</li>
	);
};
