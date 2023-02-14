import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../testUtils";
import PrivateRoute from "./PrivateRoute";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>,
    );
});

it("Matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("Matches snapshot when logged out", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <PrivateRoute />
            </UserProvider>
        </MemoryRouter>
    )
})