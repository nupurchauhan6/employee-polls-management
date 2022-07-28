import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'
import SignIn from '../components/SignIn';
import store from '../store';
import Home from '../components/Home';
import { MemoryRouter } from "react-router-dom";

describe("App", () => {

    it('should render the component', () => {
        let component;
        component = render(
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
        let component;
        component = render(
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
            <MemoryRouter initialEntries={["/home"]}>
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
});