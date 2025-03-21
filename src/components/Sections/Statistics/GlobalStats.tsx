import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'y/CountUp/CountUp';

const YOUNGEST_AGE_WITH_CHANGES = 18;
const AVERAGE_DETECTION_AGE = 48;
const COLLECTED_MONEY = 36012.41;

export const GlobalStats: React.FC = () => {
	const statRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(statRef, { once: true });

	return (
		<div ref={statRef} className="itv-stats__content-2">
			<div className="itv-stats__content-item">
				{/* TODO: Zebranych pineidzy ze zbiorek publicznych 2016 - 2019 */}
				<h3>Zebranych pieniędzy</h3>
				{isInView ? (
					<CountUp
						from={0}
						to={COLLECTED_MONEY}
						separator=" "
						join="zł"
					/> 
				) : (
					<span>0</span>
				)}
			</div>
			<div>
				<div className="itv-stats__content-item">
					<h3>Najmłodsza pacjentka z wykrytymi zmianami</h3>
					{isInView ? (
						<CountUp
							from={0}
							to={YOUNGEST_AGE_WITH_CHANGES}
							separator=" "
							join='lat'
						/>
					) : (
						<span>0</span>
					)}
				</div>
				<div className="itv-stats__content-item">
					<h3>Najstarsza pacjentka z wykrytymi zmianami</h3>
					{isInView ? (
						<CountUp
							from={0}
							to={AVERAGE_DETECTION_AGE}
							separator=" "
							join='lat'
						/>
					) : (
						<span>0</span>
					)}
				</div>
			</div>
		</div>
	);
};