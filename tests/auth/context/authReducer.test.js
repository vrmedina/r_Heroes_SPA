import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("login debe llamar el login, autenticar y establecer el usuario", () => {
    const action = {
      type: types.login,
      payload: {
        id: "123",
        name: "Random",
      },
    };
    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("logout debe borrar el nombre de usuario y establecer logged en false", () => {
    const state = {
      logged: true,
      user: {
        id: "1",
        name: "Tester",
      },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
