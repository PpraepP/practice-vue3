import { createStore } from "vuex";
import {
  store as employee,
  EmployeeStore,
  State as EmployeeState,
} from "./modules/employee/index";

export type RootState = {
  employee: EmployeeState;
};

export type Store = EmployeeStore<Pick<RootState, "employee">>;

export const store = createStore({
  modules: { employee },
});

export function useStore(): Store {
  return store as Store;
}
