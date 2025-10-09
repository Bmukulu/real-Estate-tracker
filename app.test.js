import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("🏡 Real Estate App Frontend", () => {
  test("renders app header", () => {
    render(<App />);
    const header = screen.getByText(/Dream Homes Tracker/i);
    expect(header).toBeInTheDocument();
  });

  test("displays initial property cards", () => {
    render(<App />);
    const propertyCards = screen.getAllByRole("img");
    expect(propertyCards.length).toBeGreaterThanOrEqual(2); // should have at least 2 default houses
  });

  test("can add a new property via form", () => {
    render(<App />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/Address/i), {
      target: { value: "789 Palm Dr" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Location/i), {
      target: { value: "Miami" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Value/i), {
      target: { value: "950000" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Rent/i), {
      target: { value: "3500" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Add Property/i));

    // Check that new property appears
    const newProperty = screen.getByText(/789 Palm Dr/i);
    expect(newProperty).toBeInTheDocument();
  });

  test("renders footer text", () => {
    render(<App />);
    const footer = screen.getByText(/Dream Homes Tracker/i);
    expect(footer).toBeInTheDocument();
  });
});

