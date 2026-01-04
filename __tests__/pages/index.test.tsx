import { render, screen } from "@testing-library/react";
import Home from "@/pages/";

describe("Home Page", () => {
  it("ページタイトルが表示される", () => {
    render(<Home />);
    
    const heading = screen.getByText(/Get started by editing/i);
    expect(heading).toBeInTheDocument();
  });

  it("Deploy now リンクが存在する", () => {
    render(<Home />);
    
    const deployLink = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute("href", expect.stringContaining("vercel.com"));
  });

  it("Read our docs リンクが存在する", () => {
    render(<Home />);
    
    const docsLink = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsLink).toBeInTheDocument();
  });
});
