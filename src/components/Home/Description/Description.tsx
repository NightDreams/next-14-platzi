'use client';
import Image from 'next/image';
import styles from './Description.module.sass';
import { useState } from 'react';
interface DescriptionProps {}

const PLACEHOLDER_IMAGE =
	'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAvAC8DASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYBAgQAA//EAB8QAAICAgMBAQEAAAAAAAAAAAABAgMEERIhIjETYf/EABgBAAMBAQAAAAAAAAAAAAAAAAIDBAEA/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAIBAxEhEv/aAAwDAQACEQMRAD8AQ3FnRj2apVnQr7KKmOsUtRBs2Rrei+LTvXQShj+QbY0Ws4AsitpAy6OpDLl0aT6AWVDUjaZwKem6SRFa9FJWEV2ehVXChuhvCiugtCC4gbCsXQWhauI1iVoyTJnwXFizmr2xlzrFxYtZkvYMGoYXkf0mu/19BX6s9K7HsPxgVVnoZcTI1rsKQyvP0Vsa1rQQhc9CWYY6BDKyNp9gTJs3I97rG0YLZbYxOk88P//Z';

export const Description = (props: DescriptionProps) => {
	const [hasBorder, setBorder] = useState(false);
	const handleClick = () => setBorder(!hasBorder);

	return (
		<section className={styles.Description}>
			<button
				onClick={handleClick}
				className={
					hasBorder
						? // true
						  styles.Description__buttonBoarder
						: // false = default
						  styles.Description__button
				}
			>
				<div className={styles.Description__imageContainer}>
					<Image
						src="/images/description.jpeg"
						alt="products marketplace"
						fill
						placeholder="blur"
						blurDataURL={PLACEHOLDER_IMAGE}
					/>
				</div>
			</button>
			<div className={styles.Description__text}>
				<h2>Bring the future today</h2>
				<p>
					Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
					cutting-edge gadgets and gear. Stay ahead of the curve and redefine
					your digital lifestyle with us.
				</p>
			</div>
		</section>
	);
};
