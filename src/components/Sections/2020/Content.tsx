import React, { useEffect, useState } from 'react';
import { Section } from '../Section';
import { ContentData } from 'types/types';

export const Content2020: React.FC = () => {
	const [content, setContent] = useState<string>('');

	useEffect(() => {
		fetch('/data/content.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data: ContentData) => {
				setContent(data["2020"].content);
			})
			.catch((error) => {
				console.error('Error fetching content:', error);
			});
	}, []);

	return (
		<Section title="Rok" year="2017 - 2020" style={{ backgroundImage: 'url(/section-1.webp)' }}>
			<div
				style={{ marginTop: 'var(--sp-6)' }}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</Section>
	);
};