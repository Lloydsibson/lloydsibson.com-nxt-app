import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CiCd } from "./CiCd"; // Adjust the import path as necessary

describe("CiCd Component", () => {
  test("renders without crashing", () => {
    render(<CiCd actionName="Build" />);
    expect(screen.getByText("Build")).toBeInTheDocument();
  });

  test("displays the correct action name", () => {
    const actionName = "Deploy";
    render(<CiCd actionName={actionName} />);
    expect(screen.getByText(actionName)).toBeInTheDocument();
  });

  test("contains FontAwesomeIcon with correct icon", () => {
    render(<CiCd actionName="Test" />);
    const iconElement = screen.getByTestId("faCircleCheck"); // FontAwesomeIcon might need a 'data-testid' prop for this to work
    expect(iconElement).toBeInTheDocument();
  });
});
