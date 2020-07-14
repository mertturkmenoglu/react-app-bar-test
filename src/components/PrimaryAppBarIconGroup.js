import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FriendsIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	display: 'flex'
}));

const PrimaryAppBarIconGroup = (props) => {
	const classes = useStyles();
	const { messagesCount, notificationsCount, friendshipRequestsCount } = props;

	return (
		<div className={classes.sectionDesktop}>
			<IconButton color="inherit" onClick={e => console.log("Search clicked")}>
				<SearchIcon />
			</IconButton>
			<IconButton color="inherit" onClick={e => console.log("Messages clicked")}>
				<Badge badgeContent={messagesCount} variant="dot" color="primary">
					<MailIcon />
				</Badge>
			</IconButton>
			<IconButton color="inherit" onClick={e => console.log("Notifications clicked")}>
				<Badge badgeContent={notificationsCount} variant="dot" color="primary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
			<IconButton color="inherit" onClick={e => console.log("Friends clicked")}>
				<Badge badgeContent={friendshipRequestsCount} variant="dot" color="primary">
					<FriendsIcon />
				</Badge>
			</IconButton>
			<IconButton aria-label="Profile" color="inherit" onClick={e => console.log("Profile clicked")}>
				<AccountCircle />
			</IconButton>
		</div>
	);
}

export default PrimaryAppBarIconGroup;