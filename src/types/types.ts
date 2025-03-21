export interface Tab {
	label: string;
	value: string;
}

export interface StatisticsProps {
	conductedResearch: number;
	detectedChanges: number;
	coFinancingAmount: number;
}

export interface YearData {
	conductedResearch: number;
	detectedChanges: number;
	coFinancingAmount: number;
}

export interface StatsData {
	[year: string]: YearData;
}

export interface StatsContentProps {
	year: string;
}

export interface GlobalStatsProps {
	youngestAgeWithChanges: StatisticsProps;
	averageDetectionAge: StatisticsProps;
}

export type Partner = {
	name: string;
	description: string;
	image: string;
	data: string;
} 

export interface ContentData {
	[yearOrSection: string]: {
		content: string;
	};
}
