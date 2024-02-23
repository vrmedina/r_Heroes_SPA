import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom"),
  () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
  });

describe("Pruebas en <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());

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
  });

  test("debe mostrar un error si no se encuentra el heroe (batman123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const alertNoHero = screen.getByLabelText("alert-no-hero");
    expect(alertNoHero.style.display).not.toBe("none");
  });

  test("debe llamar el Navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByLabelText("form");
    fireEvent.submit(form);

    // expect(mockedUseNavigate).toHaveBeenCalled();
  });
});
