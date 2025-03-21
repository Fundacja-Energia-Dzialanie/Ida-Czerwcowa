import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Header } from 'components/Header/Header';
import { Stats } from 'components/Sections/Statistics/Stats';
import { Content2020 } from 'components/Sections/2020/Content';
import { Content2024 } from 'components/Sections/2024/Content';
import { Partners } from 'components/Sections/Partners/Partners';
import { GlobalScrollbar } from 'mac-scrollbar';
import { About } from 'components/Sections/About/Content';
import { Footer } from 'components/Footer/Footer';

function App() {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1
		});

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<>
			<GlobalScrollbar />
			<Header />
			<Stats />
			<Content2024 />
			<Content2020 />
			<Partners />
			<Footer />
		</>
	);
}

export default App;
