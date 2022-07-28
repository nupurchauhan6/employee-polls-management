import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { updateQuestion } from '../actions/questions';

export default function Form(props) {

    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser);
    const [question] = useState(props.question);
    const selectedOption = question.optionOne.votes.includes(authedUser.id) ? "optionOne" : question.optionTwo.votes.includes(authedUser.id) ? "optionTwo" : "";
    const [value, setValue] = React.useState(selectedOption);

    const handleSubmit = (event) => {
        event.preventDefault();
        const tmp = JSON.parse(JSON.stringify(props.question));
        if (value === "optionOne") {
            if (!tmp.optionOne.votes.includes(authedUser.id)) {
                tmp.optionOne.votes.push(authedUser.id);
            }
            if (tmp.optionTwo.votes.includes(authedUser.id)) {
                const index = tmp.optionTwo.votes.indexOf(authedUser.id);
                tmp.optionTwo.votes.splice(index, 1);
            }
        }

        if (value === "optionTwo") {
            if (!tmp.optionTwo.votes.includes(authedUser.id)) {
                tmp.optionTwo.votes.push(authedUser.id);
            }
            if (tmp.optionOne.votes.includes(authedUser.id)) {
                const index = tmp.optionOne.votes.indexOf(authedUser.id);
                tmp.optionOne.votes.splice(index, 1);
            }
        }
        dispatch(updateQuestion(tmp.id, tmp.optionOne, tmp.optionTwo));
    };

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container component="main">
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h6">
                    Would You Rather
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {question && question.optionOne && question.optionTwo &&
                        <RadioGroup row name="answer" value={value}
                            onChange={handleRadioChange}>
                            <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                            <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                        </RadioGroup>
                    }
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