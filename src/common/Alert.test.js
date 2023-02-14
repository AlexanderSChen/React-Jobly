import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";

it("renders without crashing", function() {
    render(<Alert />);
});

it("Matches snapshot for danger", function() {
    let messages = ["Everything is broken", "Run for your life!!!"];
    const { asFragment } = render(<Alert type="danger" messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
});

it("Matches snapshot for success", function() {
    let messages = ["Everything is awesome!"];
    const { asFragment } = render(<Alert type="success" messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
});