import { DATA } from 'data/data';
import React from 'react';
import { StatsContentProps } from 'types/types';
import { YearlyStats } from './Statistics';

export const StatsContent: React.FC<StatsContentProps> = ({ year }) => {
	const yearData = DATA[year];

	if (!yearData) {
		return null;
	}

	return (
		<>
			<YearlyStats
				conductedResearch={yearData.conductedResearch}
				detectedChanges={yearData.detectedChanges}
				coFinancingAmount={yearData.coFinancingAmount}
			/>
		</>
	);
};