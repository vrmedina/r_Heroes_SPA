import { types } from "../../../src/auth/types/types";

describe("Pruebas en types", () => {
  test("debe regresar los siguientes types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
