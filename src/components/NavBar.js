import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    Avatar,
    Box,
    Grid,
    Typography
} from '@mui/material';
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const authedUser = useSelector(state => state.authedUser);
    const user = useSelector(state => state.users[authedUser.id]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setAuthedUser(null));
        navigate("/", { replace: true });
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/add">Create New Poll</Link>
                            </li>
                            <li>
                                <Link to="/leaderboard">Leaderboard</Link>
                            </li>
                            <li>
                                <span style={{ cursor: 'pointer' }} onClick={handleClick}>Log Out</span>
                            </li>
                        </ul>
                    </nav>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            float: 'right',
                            marginTop: '5%'
                        }}
                    >
                        <Avatar
                            src={user.avatarURL}
                            sx={{ mr: 2 }}
                        >
                            {user.name}
                        </Avatar>
                        <Typography
                            color="textPrimary"
                            variant="body1"
                        >
                            {user.name}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Nav;