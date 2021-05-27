import React from 'react';
import { DisplayBox } from '../../view/DisplayBox/DisplayBox';
import { HealthBar } from '../../view/HealthBar/HealthBar';
import styles from './InputWindow.module.scss';

const InputWindow = () => {
	return (
		<div className={styles.container}>
			<HealthBar />
			<DisplayBox />
		</div>
	);
};

export default InputWindow;
