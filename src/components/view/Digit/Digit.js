import React, { useEffect, useState } from 'react';
import styles from './Digit.module.scss';

const Digit = ({ sequence, starter }) => {
	const [index, setIndex] = useState(0);

	const [fadeProp, setFadeProp] = useState({
		fade: styles.fade_in,
	});

	useEffect(() => {
		const length = sequence.length;

		if (index < length) {
			const timeout = setInterval(() => {
				if (fadeProp.fade === styles.fade_in) {
					setFadeProp({
						fade: styles.fade_out,
					});
					setTimeout(() => setIndex(index + 1), 1500);
				} else {
					setFadeProp({
						fade: styles.fade_in,
					});
				}
			}, 1500);

			return () => clearInterval(timeout);
		} else {
			starter(false);
		}
	}, [fadeProp, index, sequence, starter]);

	return <div className={fadeProp.fade}>{sequence[index]}</div>;
};

export default Digit;
