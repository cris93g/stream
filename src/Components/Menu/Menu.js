import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<a href="http://localhost:3001/login">
				<span role="img" aria-label="about us">
					&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
				</span>
				LOG in
			</a>
			{/* <a href="/">
				<span role="img" aria-label="price">
					&#x1f4b8;
				</span>
				Pricing
			</a>
			<a href="/">
				<span role="img" aria-label="contact">
					&#x1f4e9;
				</span>
				Contact
			</a> */}
		</StyledMenu>
	);
};
Menu.propTypes = {
	open: bool.isRequired
};
export default Menu;
