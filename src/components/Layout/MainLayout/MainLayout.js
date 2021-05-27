import React from 'react';
import InputWindow from '../InputWindow/InputWindow';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<InputWindow />
				<Sidebar />
			</div>
		</div>
	);
};

export default MainLayout;
