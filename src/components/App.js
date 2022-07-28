import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from './Dashboard';
import Nav from './NavBar';
import { Routes, Route, Navigate } from "react-router-dom";
import NewPoll from './NewPoll';
import ViewPoll from './ViewPoll';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Leaderboard from './Leaderboard';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      main: '#4caf50'
    },
    error: {
      main: '#d32f2f'
    },
    info: {
      main: '#42a5f5'
    }
  },
});


function App() {
  const loading = useSelector(state => state.loadingBar);
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <LoadingBar />
      <div className="container">
        {!authedUser ? <>
          <Home />
          {loading === true ? null : (
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </> : <>
          <Nav />
          {loading === true ? null : (
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/question/:id" element={<ViewPoll />} />
              <Route path="/new" element={<NewPoll />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          )} </>}
      </div>
    </ThemeProvider>
  );
}

export default App;
