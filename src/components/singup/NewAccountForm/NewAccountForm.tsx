'use client';

import { handleCreateUser } from '@/actions';
import { FormEvent, useState } from 'react';
import styles from './NewAccountForm.module.sass';

export const NewAccountForm = async () => {
	const [errors, setErrors] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!(event.target instanceof HTMLFormElement)) {
			return;
		}

		const formData = new FormData(event.target);
		await handleCreateUser(formData);
	};

	return (
		<div className={styles.NewAccountForm}>
			<h1 className={styles.NewAccountForm__title}>New Account</h1>
			<form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
				<input
					type="text"
					name="firstName"
					placeholder="Name"
					disabled={loading}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Lastname"
					disabled={loading}
				/>
				<input
					type="text"
					name="email"
					placeholder="email"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					disabled={loading}
				/>
				<input
					type="text"
					name="phone"
					placeholder="phone number"
					pattern="^[0-9]*$"
					disabled={loading}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					disabled={loading}
				/>
				<input
					type="password"
					name="password_confirmation"
					placeholder="re-type password"
					disabled={loading}
				/>
				<input
					type="submit"
					name="submit"
					value="Crear cuenta"
					disabled={loading}
				/>
			</form>
			{errors.length > 0 && (
				<div>
					{errors.map((error, index) => {
						return (
							<p key={index} className={styles.NewAccountForm__error}>
								{error}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
};
