import { ContadorAction } from "../types/actions";

export const contadorReducer = (
  state: number,
  action: ContadorAction
): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
