import React, { useState, useEffect, useCallback } from 'react';
import Digit from '../Digit/Digit';
import styles from './DisplayBox.module.scss';
import { GiCheckMark } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import {
	addAnswer,
	getAnswer,
	getHealth,
	getLevel,
	getScore,
	getSequence,
	getStart,
	setHealth,
	setLevel,
	setScore,
	start,
} from '../../../redux/sequenceReducer';

const inputValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Component = ({
	sequence,
	start,
	starter,
	level,
	answer,
	setNewLevel,
	setNewHealth,
	setNewScore,
	addNewAnswer,
}) => {
	const [displayInput, setDisplayInput] = useState(true);
	const [index, setIndex] = useState(0);
	const [inputValue, setInputValue] = useState('');
	const [levelCorrect, setLevelCorrect] = useState(false);
	const [levelIncorrect, setLevelIncorrect] = useState(false);
	//const [answer, setAnswer] = useState([]);
	const done = answer.length === sequence.length && sequence.length > 0;
	console.log(done);

	//const update = useCallback(() => {
	//	setDisplayInput(false);
	//	setLevelCorrect(true);
	//	setScore(level.value);
	//}, [level]);
	//
	useEffect(() => {
		console.log('effect');
		console.log('effect');
		if (done) {
			//setDisplayInput(false);
			//setLevelCorrect(true);
			//setScore(level.value);
		}
	});

	if (done) {
		//update();
		//setLevel(1);
		console.log(displayInput);
		console.log(levelCorrect);
		console.log(level.value);
	}

	console.log('index', index);

	const enterInput = (value) => {
		setInputValue(value);
		addNewAnswer(value);
		console.log('sequence', sequence[index]);
		console.log('value', value);
		console.log('index', index);
		console.log('indexAfter', index);

		if (value === sequence[index]) {
			setIndex(index + 1);
			console.log(answer);
			console.log('click');
		} else {
			//setDisplayInput(false);
			//setLevelIncorrect(true);
			setHealth();
			//setTimeout(() => {
			//	setDisplayInput(true);
			//	setLevelIncorrect(false);
			//}, 1000);
		}
	};

	// const updateOnDone = () => {
	// 	setDisplayInput(false);
	// 	setLevelCorrect(true);
	// 	setScore(level);
	// 	setLevel(1);
	// 	if (sequence.length > 0) {
	// 		if (done) {
	// 		}
	// 	}

	// }

	return (
		<section>
			<div className={styles.displayWrapper}>
				<h3>{sequence.length} digits</h3>
				{levelCorrect && (
					<div className={styles.correct}>
						<GiCheckMark className={styles.icon} />
					</div>
				)}
				{levelIncorrect && (
					<div className={styles.correct}>
						<AiOutlineClose className={styles.icon_bad} />
					</div>
				)}
				{displayInput && (
					<div className={styles.display}>
						{start && (
							<span>
								<Digit sequence={sequence} starter={starter} />
							</span>
						)}
						{!start && <span>{inputValue}</span>}
					</div>
				)}
			</div>
			<div className={styles.btnWrapper}>
				{inputValues.map((number) => (
					<button key={number} onClick={() => enterInput(number)}>
						<span>{number}</span>
					</button>
				))}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	level: getLevel(state),
	score: getScore(state),
	health: getHealth(state),
	sequence: getSequence(state),
	start: getStart(state),
	answer: getAnswer(state),
});

const mapDispatchToProps = (dispatch) => ({
	starter: (value) => dispatch(start(value)),
	setNewlevel: () => dispatch(setLevel()),
	setNewHealth: () => dispatch(setHealth()),
	setNewScore: (value) => dispatch(setScore(value)),
	addNewAnswer: (value) => dispatch(addAnswer(value)),
});

const DisplayBoxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);

export { DisplayBoxContainer as DisplayBox };
