import React from 'react';

const Heading = ({ children, level = '1', ...props }) => {
	const Heading = `h${level}`;

	return <Heading {...props}>{children}</Heading>;
};

export default Heading;
