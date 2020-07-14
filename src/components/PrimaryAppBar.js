import React from 'react';
import { IconButton, Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SquirrelLogo from '../assets/icon_white.svg';
import PrimaryAppBarIconGroup from './PrimaryAppBarIconGroup';


const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'block',
		pointerEvents: 'auto'
	}
}));

const PrimaryAppBar = (props) => {
	const classes = useStyles();
	const { messagesCount, notificationsCount, friendshipRequestsCount } = props;

	return (
		<div className={classes.grow} >
			<AppBar position="static" style={{ background: '#DD2C00' }}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit">
						<img src={SquirrelLogo} alt="logo" width={32} height={32} />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						Vevericka
          </Typography>
					<div className={classes.grow} />
					<PrimaryAppBarIconGroup
						messagesCount={messagesCount}
						notificationsCount={notificationsCount}
						friendshipRequestsCount={friendshipRequestsCount} />
				</Toolbar>
			</AppBar>
		</div >
	)
}

export default PrimaryAppBar;
