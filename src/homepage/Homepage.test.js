import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Homepage";
import { UserProvider } from "../testUtils";

it("Matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Home />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("Matches snapshot when logged out", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <Home />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});