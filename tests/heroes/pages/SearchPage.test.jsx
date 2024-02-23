import { render, screen } from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <SearchPage />", () => {
  test("debe mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test("debe mostrar a batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

    const alertNoText = screen.getByLabelText("alert-no-text");
    expect(alertNoText.style.display).toBe("none");

    screen.debug();
  });
});
