import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PrivateRoute />", () => {
  test("no debe mostrar children si esta autenticado", () => {

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
