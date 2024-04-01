import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ContactUs from "./ContactUs";

test("submits contact form", async () => {
  render(<ContactUs />);

  const nameInput = screen.getByLabelText("Name:");
  userEvent.type(nameInput, "Dharshana");

  const emailInput = screen.getByLabelText("Email:");
  userEvent.type(emailInput, "dharshanae@yahoo.com");

  const messageInput = screen.getByLabelText("Message:");
  userEvent.type(messageInput, "This is a test message");

  const submitButton = screen.getByRole("button", { name: "Send Message" });
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText("Thank You Dharshana")).toBeInTheDocument();
  });

  expect(screen.getByText("We will contact you soon on:")).toBeInTheDocument();
  expect(screen.getByText("Email: dharshanae@yahoo.com")).toBeInTheDocument();
});
