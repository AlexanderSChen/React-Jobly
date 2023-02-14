import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";
import { UserProvider } from "../testUtils";
import User from "../../../backend/models/user";

it("Renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
                <Navigation />
            </UserProvider>
        </MemoryRouter>,
    );
});

it("Matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Navigation />
            </UserProvider>
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("Matches snapshot when logged out", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <Navigation />
            </UserProvider>
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});