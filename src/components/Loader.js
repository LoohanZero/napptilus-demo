import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

import style from '../styles/components/loader.module.css';
import Container from './primitive/Container';

const Loader = () => {
	return (
		<Container className={style.loaderContainer}>
			<PacmanLoader color="gray" size="40px" />
		</Container>
	);
};

export default Loader;
