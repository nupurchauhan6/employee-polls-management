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

export default function Form(props) {

    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser);
    const [question] = useState(props.question);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
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
                    {question && question.optionOne && question.optionTwo  &&
                        <RadioGroup row name="answer">
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