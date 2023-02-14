import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./JobList";

it("Renders without crashing", function() {
    render(<Jobs />);
});

it("Matches snapshot with no jobs", function() {
    const { asFragment } = render(<Jobs />);
    expect(asFragment()).toMatchSnapshot();
});