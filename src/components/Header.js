import React from 'react';
import { NavLink } from 'react-router-dom';

import oompaIcon from '../imgs/logo-umpa-loompa.png';
import style from '../styles/components/header.module.css';
import Container from './primitive/Container';
import Heading from './primitive/Heading';
import Image from './primitive/Image';

const Header = () => {
	return (
		<Container as="header" className={style.header}>
			<Container as="nav" className={style.nav}>
				<NavLink to="/">
					<Image src={oompaIcon} className={style.navIcon} />
				</NavLink>
				<Heading className={style.navDescription}>
          Oompa Loompa&apos;s Crew
				</Heading>
			</Container>
		</Container>
	);
};

export default Header;
