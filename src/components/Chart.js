import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {
    const question = props.question;

    const data = {
        labels: question ? [question.optionOne.text, question.optionTwo.text] : [],
        datasets: [
            {
                label: 'Current Statistics',
                data: question ? [question.optionOne.votes.length, question.optionTwo.votes.length] : [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
              position: 'bottom'
            },
        },
        maintainAspectRatio: false
    }

    return <Pie data={data} options={options}  width="200px" height="200px"/>;
}

export default PieChart;


