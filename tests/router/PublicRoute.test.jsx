import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("debe mostrar children si no esta autenticado", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("debe llamar el Navigate si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "321",
        name: "Testtest",
      },
    };
  });
});
