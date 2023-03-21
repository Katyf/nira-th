import React from "react";
import { render, screen } from "@testing-library/react";
import mockData from "../Mocks/mock_data.json";
import { BusInformationDialog } from "./BusInformationDialog";

describe("BusInformationDialog", () => {
  it("correctly renders the component with data from props", () => {
    render(<BusInformationDialog {...mockData} />);

    // Header elements
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-header-icon")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-name")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-mwe")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-mwc")).toBeInTheDocument();

    // Table Elements
    expect(screen.getByTestId("bus-dialog-table")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-allocated-cost")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-total-cost")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-constraints")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-bus-id")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-voltage")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-owner")).toBeInTheDocument();
    expect(screen.getByTestId("bus-dialog-coordinates")).toBeInTheDocument();
  });
});
