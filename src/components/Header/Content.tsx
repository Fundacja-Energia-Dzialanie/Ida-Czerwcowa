import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { About } from 'components/Sections/About/Content';
import { ContentData } from 'types/types';

export const HeaderContent: React.FC = () => {
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
				setContent(data["2025"].content);
			})
			.catch((error) => {
				console.error('Error fetching content:', error);
			});
	}, []);


	return (
		<>

			<About />

			<motion.div 
				className="itv-content"
				initial={{ backgroundColor: 'transparent' }}
				whileInView={{ backgroundColor: 'rgba( var(--body-background-rgb), 0.32 )' }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 1, ease: "easeOut" }}
				style={{ minHeight: '45vh' }}
			>
				<motion.div 
					className="itv-container"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<h2>
						Plany na <span>2025</span>
					</h2>
					<div
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</motion.div>
			</motion.div>
		</>
	)
}