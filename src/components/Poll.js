import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Moment from 'react-moment';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const Poll = (props) => {

    const [question] = useState(props.question);
    const users = useSelector(state => state.users);
    const authedUser = useSelector(state => state.authedUser);
    const user = users[question.author];
    const answered = question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id);
    const optionOne = question.optionOne ? (question.optionOne.votes.length / Object.keys(users).length) * 100 : 0;
    const optionTwo = question.optionTwo ? (question.optionTwo.votes.length / Object.keys(users).length) * 100 : 0;

    const styles = {
        wrapper: {
            padding: '20px',
            boxShadow: '0 4px 4px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%)',
            textAlign: 'center',
            marginBottom: 20,
            borderRadius: '30px'
        },
        bar: {
            height: '40px !important',
            borderRadius: 10
        },
        text: {
            margin: 10
        },
        answered: {
            float: 'right',
            width: '25%',
            fontSize: '10px'
        },
    }
    return (
        <Link to={`/question/${question.id}`}>
            <div style={styles.wrapper}>
                {user && question &&
                    <List sx={{ width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar alt={user.name} src={user.avatarURL} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={user.name}
                                        secondary={
                                            <React.Fragment>
                                                <Moment format="YYYY/MM/DD HH:mm:ss" date={new Date(question.timestamp)} />
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" style={styles.answered} color={answered ? "success" : "error"}>{answered ? "Answered" : "Not answered"}</Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography style={styles.text} variant="body2" color="text.primary">{question.optionOne.text}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ width: '100%', mr: 1 }}>
                                        <LinearProgress color={optionOne > optionTwo ? "success" : optionTwo === optionOne ? "info" : "error"} sx={styles.bar} variant="determinate" value={optionOne} />
                                    </Box>
                                    <Box >
                                        <Typography variant="body2" color="text.secondary">{`${Math.round(
                                            optionOne
                                        )}%`}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography style={styles.text} variant="body2" color="text.primary">{question.optionTwo.text}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ width: '100%', mr: 1 }}>
                                        <LinearProgress color={optionOne < optionTwo ? "success" : optionTwo === optionOne ? "info" : "error"} sx={styles.bar} variant="determinate" value={optionTwo} />
                                    </Box>
                                    <Box >
                                        <Typography variant="body2" color="text.secondary">{`${Math.round(
                                            (optionTwo)
                                        )}%`}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </List>
                }
            </div>
        </Link>
    )

}

export default Poll;