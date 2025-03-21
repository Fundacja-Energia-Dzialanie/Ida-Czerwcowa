import { Tab, StatsData } from "types/types";

export const TABS: Tab[] = [
	{ label: '2016 & 2017', value: '2016' },
	{ label: '2017 & 2018', value: '2017' },
	{ label: '2018 & 2019', value: '2018' },
	{ label: '2019 & 2020', value: '2019' },
	{ label: '2020 & 2021', value: '2020' },
	{ label: '2021 & 2022', value: '2021' },
	{ label: '2022 & 2023', value: '2022' },
	{ label: '2023 & 2024', value: '2023' }
];

export const DATA: StatsData = {
	'2016': {
		conductedResearch: 286,
		detectedChanges: 8,
		coFinancingAmount: 8580,
	},
	'2017': {
		conductedResearch: 124,
		detectedChanges: 20,
		coFinancingAmount: 3720,
	},
	'2018': {
		conductedResearch: 175,
		detectedChanges: 12,
		coFinancingAmount: 5250,
	},
	'2019': {
		conductedResearch: 188,
		detectedChanges: 7,
		coFinancingAmount: 5640,
	},
	'2020': {
		conductedResearch: 60,
		detectedChanges: 3,
		coFinancingAmount: 1800,
	},
	'2021': {
		conductedResearch: 103,
		detectedChanges: 7,
		coFinancingAmount: 3090,
	},
	'2022': {
		conductedResearch: 102,
		detectedChanges: 9,
		coFinancingAmount: 3060,
	},
	'2023': {
		conductedResearch: 25,
		detectedChanges: 2,
		coFinancingAmount: 750,
	}
};