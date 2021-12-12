import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import useStyles from '../styles/Loading.styles';

export default function Loading() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress
				className={classes.progress}
				color="secondary"
				size={100}
				thickness={5}
			/>
			<Typography className={classes.name} variant="h3">
				Loading...
			</Typography>
		</div>
	);
}
