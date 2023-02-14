import React from "react";
import { render } from "@testing-library/react";
import JobCardList from "./JobCardList";

it("Renders without crashing", function() {
    render(<JobCardList />);
});

it("Matches snapshot with no jobs", function() {
    const { asFragment } = render(<JobCardList />);
    expect(asFragment()).toMatchSnapshot();
});