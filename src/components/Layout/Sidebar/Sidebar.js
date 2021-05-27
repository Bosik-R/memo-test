import React from 'react';
import { connect } from 'react-redux';
import {
	addSequence,
	getHealth,
	getLevel,
	getScore,
	getSequence,
	reset,
	start,
} from '../../../redux/sequenceReducer';
import { randomArray } from '../../../utils/randomArray';

import Stats from '../../features/Stats/Stats';
import styles from './Sidebar.module.scss';

const Component = ({ level, score, health, setSequence, reset, start }) => {
	const startSequence = () => {
		const newSequence = randomArray(level.value);
		setTimeout(() => {
			setSequence(newSequence);
			start(true);
		}, 1000);
	};

	return (
		<section className={styles.container}>
			<Stats title={level.title} value={level.value} />
			<Stats title={score.title} value={score.value} />
			{health === 0 ? (
				<button onClick={() => reset()}>RESET</button>
			) : (
				<button onClick={() => startSequence()}>START</button>
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	level: getLevel(state),
	score: getScore(state),
	health: getHealth(state),
	sequence: getSequence(state),
});

const mapDispatchToProps = (dispatch) => ({
	setSequence: (value) => dispatch(addSequence(value)),
	start: (value) => dispatch(start(value)),
	reset: () => dispatch(reset()),
});

const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);

export { SidebarContainer as Sidebar };
