import React from 'react';
import { useSelector } from 'react-redux';
import Poll from './Poll';
const Dashboard = () => {

    const questions = useSelector(state => state.questions);
    const renderPolls = Object.keys(questions).map((key) => {
        return <Poll key={key} question={questions[key]} />
    });

    return (
        <div>
            {renderPolls}
        </div>
    )
}

export default Dashboard;