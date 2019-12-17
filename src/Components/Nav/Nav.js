import React, { useState } from 'react';

import { Burger, Menu } from '../';

function Nav() {
	const [ open, setOpen ] = useState(false);
	return (
		<div>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
		</div>
	);
}
export default Nav;
