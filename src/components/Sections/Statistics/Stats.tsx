import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../Section';
import { TABS } from 'data/data';
import { StatsContent } from './Content';
import { GlobalStats } from './GlobalStats';

interface SectionProps {
	title: string;
	year: string;
	children: React.ReactNode;
}

export const Stats: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>('2016');

	const handleTabChange = (tabValue: string): void => {
		setActiveTab(tabValue);
	};

	return (
		<Section title="Kampania w" year="liczbach">
			<ul className="itv-tabs">
				{TABS.map((tab) => (
					<li
						key={tab.value}
						className={`itv-tab ${activeTab === tab.value ? 'itv-tab--active' : ''}`}
						onClick={() => handleTabChange(tab.value)}
					>
						{tab.label}
					</li>
				))}
			</ul>

			<div className="itv-stats">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
					>
						<StatsContent year={activeTab} />
					</motion.div>
				</AnimatePresence>

				<GlobalStats />
			</div>
		</Section>
	);
};