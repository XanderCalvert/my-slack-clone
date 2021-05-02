import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ user }] = useStateValue();

	return (
		<div className="header">
			<div className="header__left">
				<Avatar
					className="header__avatar"
					alt={user?.displayName}
					src={user?.photoURL}
				/>
				<AccessTimeIcon />
			</div>
			{/* Avatar for logged in user */}
			{/* Time Icon */}
			<div className="header__search">
				{/* Search icon */}
				<SearchIcon className="search__icon" />
				{/* Input */}
				<input placeholder="Search Matt Calvert's Slack" />
			</div>
			<div className="header__right">
				{/* Help Icon */}
				<HelpOutlineIcon />
			</div>
		</div>
	);
}

export default Header;
