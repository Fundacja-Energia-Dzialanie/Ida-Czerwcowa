import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'y/CountUp/CountUp';
import { StatisticsProps } from 'types/types';

export const YearlyStats: React.FC<StatisticsProps> = ({ conductedResearch, detectedChanges, coFinancingAmount }) => {
	const statRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(statRef, { once: true });

	return (
		<div ref={statRef} className="itv-stats__content">

			<div>
				<div className="itv-stats__content-item">
					<h3>Przeprowadzonych badań</h3>
					{isInView ? (
						<CountUp
							from={0}
							to={conductedResearch}
							separator=" "
						/>
					) : (
						<span>0</span>
					)}
				</div>

				<div className="itv-stats__content-item">
					<h3>Wykrytych zmian</h3>
					{isInView ? (
						<CountUp
							from={0}
							to={detectedChanges}
							separator=" "
						/>
					) : (
						<span>0</span>
					)}
				</div>
			</div>

			<div className="itv-stats__content-item">
				<h3>Kwota współfinansowania</h3>
				{isInView ? (
					<CountUp
						from={0}
						to={coFinancingAmount}
						join="zł"
						separator=" "
					/>
				) : (
					<span>0</span>
				)}
			</div>
		</div>
	);
};