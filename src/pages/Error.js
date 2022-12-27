import React from 'react';

import Container from '../components/primitive/Container';
import Heading from '../components/primitive/Heading';
import Image from '../components/primitive/Image';
import Text from '../components/primitive/Text';
import errorImage from '../imgs/500-internal-server-error-featured-image-1.png';
import style from '../styles/pages/error.module.css';

const Error = () => {
	return (
		<>
			<Container as="section" className={style.errorContainer}>
				<Container className={style.errorDescription}>
					<Image className={style.errorImage} src={errorImage} />
					<Container className={style.errorHeadingContainer}>
						<Heading className={style.errorTitle}>Error 404</Heading>
						<Text evel={2} className={style.errorMessage}>
              There are no Oompas with that ID
						</Text>
					</Container>
				</Container>
			</Container>
		</>
	);
};

export default Error;
