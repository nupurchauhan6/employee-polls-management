import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'
import SignIn from '../components/SignIn';
import store from '../store';
import Home from '../components/Home';
import { MemoryRouter } from "react-router-dom";
import Nav from "../components/NavBar";
import { setAuthedUser } from '../actions/authedUser';
import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";

describe("App", () => {

    it('should render the component', () => {
        let component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('check if we have login form', () => {
        let component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <SignIn />
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component.getByText('Username')).toBeInTheDocument();
        expect(component.getByText('Password')).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });

    it('home screen should render links', () => {
        const view = render(
            <MemoryRouter initialEntries={["/"]}>
                <Provider store={store}>
                    <Home />
                </Provider>
            </MemoryRouter>
        );
        expect(view).toMatchSnapshot();

        const signIn = screen.getByText("Sign Up");
        const signUp = screen.getByText("Sign In");

        expect(signIn).toBeInTheDocument();
        expect(signUp).toBeInTheDocument();
    });

    it('an event should be fired on button click', async () => {

        const { users, questions } = await getInitialData();
        store.dispatch(receiveUsers(users));
        store.dispatch(setAuthedUser({ id: "johndoe" }));
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav />
                </BrowserRouter>
            </Provider>
        );
        fireEvent.click(screen.getByText("Leaderboard"));
        expect(window.location.href).toEqual("http://localhost/leaderboard");
    });
});