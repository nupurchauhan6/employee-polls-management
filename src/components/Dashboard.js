import React from 'react';
import { useSelector } from 'react-redux';
import Poll from './Poll';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
const Dashboard = () => {

    const questions = useSelector(state => state.questions);
    const authedUser = useSelector(state => state.authedUser);

    const renderAnsweredPolls = Object.keys(questions).map((key) => {
        if (questions[key].optionOne.votes.includes(authedUser.id) || questions[key].optionTwo.votes.includes(authedUser.id)) {
            return <Poll key={key} question={questions[key]} />
        }
        return <div key={key}></div>
    });

    const renderUnansweredPolls = Object.keys(questions).map((key) => {
        if (!questions[key].optionOne.votes.includes(authedUser.id) && !questions[key].optionTwo.votes.includes(authedUser.id)) {
            return <Poll key={key} question={questions[key]} />
        }
        return <div key={key}></div>
    });

    return (
        <div>
            <Divider sx={{ marginTop: 5, marginBottom: 5 }}>
                <Chip label="Unanswered Questions" />
            </Divider>
            {renderUnansweredPolls}
            <Divider sx={{ marginTop: 5, marginBottom: 5 }}>
                <Chip label="Answered Questions" />
            </Divider>
            {renderAnsweredPolls}
        </div>
    )
}

export default Dashboard;