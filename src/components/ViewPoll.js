import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import BasicTable from './Table';
import Form from './Form';
import Grid from '@mui/material/Grid';
import PieChart from './Chart';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

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
                <div style={styles.header}>
                    <div>
                        <img style={styles.img} alt={user.name} src={user.avatarURL} />
                        <Typography variant="h5"> {user.name}</Typography>
                        <Typography> {`${'@' + user.id}`}</Typography>
                    </div>
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }}>
                        <Chip label="Update your answers or submit one if you have not." />
                    </Divider>
                    <Form question={question} />
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }}>
                        <Chip label="Current Status of the Poll." />
                    </Divider>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <BasicTable question={question} />
                        </Grid>
                        <Grid item xs={6}>
                            <PieChart question={question} />
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    );
}

export default ViewPoll;