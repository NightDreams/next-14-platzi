import styles from './Hero.module.css';
interface HeroProps {}

export const Hero = ({}: HeroProps) => {
	return (
		<section className={styles.Hero}>
			<h1>Future world</h1>
			<h2>Empowering Your Tomorrow, Today!</h2>
		</section>
	);
};
