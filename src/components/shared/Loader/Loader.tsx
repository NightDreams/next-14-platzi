import styles from './Loader.module.sass';

interface LoaderProps {}

export const Loader = (props: LoaderProps) => {
	return (
		<div className={styles.LoaderWrapper}>
			<div className={styles.Loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
