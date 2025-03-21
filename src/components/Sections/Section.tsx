import React from 'react';
import { motion } from 'framer-motion';

export const Section: React.FC<{ children: React.ReactNode, title: string, year: string, style?: React.CSSProperties }> = ({ children, title, year, style }) => {
	return (
		<>
			<motion.section
				className="itv-section"
				style={{ ...style }}
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-20px" }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<div className="itv-container">
					<h2>
						{title} <span>{year}</span>
					</h2>
					{children}
				</div>
			</motion.section>
		</>
	)
};