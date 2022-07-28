import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import QuizIcon from '@mui/icons-material/Quiz';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../actions/questions';
import { formatQuestion } from '../utils/_DATA';
import { updateCreatedQuestion } from '../actions/users';

export default function NewPoll() {

    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const res = {
            author: authedUser.id,
            optionOneText: data.get('optionOne'),
            optionTwoText: data.get('optionTwo')
        };
        const formattedQuestion = formatQuestion(res);
        dispatch(addQuestion(formattedQuestion));
        dispatch(updateCreatedQuestion(authedUser.id, formattedQuestion.id));
        alert("New Question is created. Go to home to check your question.");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <QuizIcon />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Create New Poll
                </Typography>
                <Typography component="h1" variant="h6">
                    Would You Rather
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="optionOne"
                                label="Option One"
                                name="optionOne"
                                autoComplete="optionOne"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="optionTwo"
                                label="Option Two"
                                name="optionTwo"
                                autoComplete="optionTwo"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}