import { render, screen } from "@testing-library/react";
import QuestionTitle from "./QuestionTitle";

describe("QuestionTitle component", () => {
  test("renders test as a text", () => {
    render(<QuestionTitle title="test" />);

    const outputElement = screen.queryByText('test');
    expect(outputElement).toBeInTheDocument();
  });
});
