import React from 'react';

const Container = ({ as = 'div', children, ...props }) => {
	const Component = as;

	return <Component {...props}>{children}</Component>;
};

export default Container;
