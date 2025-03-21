import React, { useEffect, useState } from 'react';
import { Section } from '../Section';
import { ContentData } from 'types/types';

export const About: React.FC = () => {
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
				setContent(data["about_us"].content);
			})
			.catch((error) => {
				console.error('Error fetching content:', error);
			});
	}, []);

	return (
		<div style={{ marginTop: 'calc( var(--sp-10) * 1.5 )' }} className="itv-about">
			<Section title="O" year="kampanii">
				<div
					style={{ marginTop: 'var(--sp-6)' }}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</Section>
		</div>
	);
};