import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<div className='bg-bblack text-wwhite font-varela'>
			<div className='min-h-screen'>
				<Navbar />
				<HeroSection />
			</div>

			<About />
			<Projects />
			<Contact />
		</div>
	);
}
