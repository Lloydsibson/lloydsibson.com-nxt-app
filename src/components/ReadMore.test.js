import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReadMoreBtn } from "./ReadMore"; // Adjust the import path as necessary

describe("ReadMoreBtn", () => {
  it("renders with provided text", () => {
    render(<ReadMoreBtn text="Read More" />);
    expect(screen.getByTestId("rm-button-text")).toHaveTextContent(
      "Read More ghghg"
    );
  });
});
