import React from 'react';
import { connect } from 'react-redux';

import { FaHeart } from 'react-icons/fa';
import styles from './HealthBar.module.scss';
import { getHealth } from '../../../redux/sequenceReducer';

const Component = ({ health }) => {
	return (
		<div className={styles.wrapper}>
			<FaHeart className={styles.icon} />
			<div
				className={
					health === 3
						? styles.bar3
						: health === 2
						? styles.bar2
						: health === 1
						? styles.bar1
						: styles.bar0
				}
			></div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	health: getHealth(state),
});

const HealthBarContainer = connect(mapStateToProps)(Component);

export { HealthBarContainer as HealthBar };
