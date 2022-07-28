import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import BasicTable from './Table';
import Form from './Form';

const ViewPoll = () => {

    const styles = {
        img: {
            borderRadius: '50%',
            width: '15%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        header: {
            textAlign: 'center'
        }
    }

    const { id } = useParams();
    const question = useSelector(state => state.questions[id]);
    const user = useSelector(state => state.users[question.author]);
    return (
        <div>
            {user && question &&
                <div>
                    <div style={styles.header}>
                        <img style={styles.img} alt={user.name} src={user.avatarURL} />
                        <Typography variant="h5"> {user.name}</Typography>
                        <Typography> {`${'@' + user.id}`}</Typography>
                        <Form question={question}/>
                    </div>
                    <div>
                        <BasicTable question={question} />
                    </div>
                </div>
            }
        </div>
    );
}

export default ViewPoll;