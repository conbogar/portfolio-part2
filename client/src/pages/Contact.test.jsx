import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact page", () => {
  it("renders the Contact heading and form fields", () => {
    render(<Contact />);


    expect(
        screen.getByRole("heading", { level: 1, name: /contact/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
});
