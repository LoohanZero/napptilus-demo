import React from 'react';

import Container from '../components/primitive/Container';
import { ACTIONS } from '../helpers/home';
import searchIcon from '../imgs/ic_search.png';
import style from '../styles/components/search.module.css';
import Image from './primitive/Image';
import Input from './primitive/Input';

const Search = ({ onSearch, inputValue, placeholder }) => {
	return (
		<Container className={style.searchContainer}>
			<Input
				onChange={event => onSearch({ type: ACTIONS.UPDATE_SEARCH, payload: event.target.value })}
				className={style.searchInput}
				value={inputValue}
				placeholder={placeholder}
			/>
			<Image className={style.searchIcon} src={searchIcon} />
		</Container>
	);
};

export default Search;
