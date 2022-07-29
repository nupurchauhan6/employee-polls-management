import {
    Avatar,
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { useSelector } from 'react-redux';

const Leaderboard = () => {

    const users = useSelector(state => state.users);
    const tmp = Object.keys(users).map(key => {
        return { ...users[key], "total": Object.entries(users[key].answers).length + users[key].questions.length, "answers": Object.entries(users[key].answers).length, "created": users[key].questions.length }

    });
    const ordered = tmp.sort((a, b) => {
        return b.total - a.total;
    });
    console.log(ordered);

    return (
        <Card sx={{ marginTop: 10 }}>
            <Box sx={{ minWidth: 650 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Answered
                            </TableCell>
                            <TableCell>
                                Created
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordered && ordered.map((ele) => {
                            return <TableRow key={ele.id}>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Avatar
                                            src={ele.avatarURL}
                                            sx={{ mr: 2 }}
                                        >
                                            {ele.name}
                                        </Avatar>
                                        <Typography
                                            color="textPrimary"
                                            variant="body1"
                                        >
                                            {ele.name}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    {ele.answers}
                                </TableCell>
                                <TableCell>
                                    {ele.created}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </Box>
        </Card>
    );
};

export default Leaderboard;