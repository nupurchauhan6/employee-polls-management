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
                        {users && Object.keys(users).map((id) => {
                            return <TableRow key={id}>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Avatar
                                            src={users[id].avatarURL}
                                            sx={{ mr: 2 }}
                                        >
                                            {users[id].name}
                                        </Avatar>
                                        <Typography
                                            color="textPrimary"
                                            variant="body1"
                                        >
                                            {users[id].name}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    {Object.entries(users[id].answers).length}
                                </TableCell>
                                <TableCell>
                                    {users[id].questions.length}
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