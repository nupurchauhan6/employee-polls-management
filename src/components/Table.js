import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Avatar, Typography, Stack } from '@mui/material';


export default function BasicTable(props) {

    const question = props.question;
    const users = useSelector(state => state.users);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{question.optionOne.text}</TableCell>
                        <TableCell align="right">{question.optionTwo.text}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            {users && question && question.optionOne.votes.map(id => {
                                return <Stack key={id} direction="row" alignItems="center" spacing={2}>
                                    <Avatar alt="user.name" src={users[id].avatarURL} />
                                    <Typography variant="subtitle2" noWrap>{users[id].name}</Typography>
                                </Stack>
                            })}
                        </TableCell>
                        <TableCell component="th" scope="row" style={{ float: 'right' }}>
                            {users && question && question.optionTwo.votes.map(id => {
                                return <Stack key={id} direction="row" alignItems="center" spacing={2} style={{ marginTop: 20 }}>
                                    <Avatar alt="user.name" src={users[id].avatarURL} />
                                    <Typography variant="subtitle2" noWrap>{users[id].name}</Typography>
                                </Stack>
                            })}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
