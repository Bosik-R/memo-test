import React from 'react';
import styles from './Stats.module.scss';

const Stats = ({ value, title }) => {
	return (
		<div className={styles.stats}>
			<h4>{title}</h4>
			<h2>{value}</h2>
		</div>
	);
};

export default Stats;
