import React from 'react';
import { motion } from 'framer-motion';
import { HeaderContent } from './Content';

export const Header: React.FC = () => {
	return (
		<>
			<header>
				<div className="itv-container">
					<motion.div
						className="itv-logo"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<img src="/logo-energia.webp" alt="Logo energia" loading='lazy' />
						<img src="/logo-ida.webp" alt="Logo Ida Czerwcowa" loading='lazy' />
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					>
						Kampania społeczno-charytatywna "Ida Czerwcowa. Stop rakowi piersi"
						<span>w ramach projektu "Matki-matkom, dzieci-dzieciom"</span>
					</motion.h1>

				</div>
				<HeaderContent />
			</header>
		</>
	)
}