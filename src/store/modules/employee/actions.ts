import { ActionTree, ActionContext } from "vuex";
import { RootState } from "@/store";
import { Mutations } from "./mutations";
import { state, State, EmployeeData } from "./state";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  addEmployee({ commit }: AugmentedActionContext, payload: EmployeeData): void;
  deleteEmployee({ commit }: AugmentedActionContext, payload: string): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  addEmployee({ commit }, payload: EmployeeData) {
    commit("ADD_EMPLOYEE", payload);
    commit("SET_EMP_LAST_ID", payload.id);
  },
  deleteEmployee({ commit, state }, payload: string) {
    //add former employee
    const itemDelete: EmployeeData | undefined = state.employeeList.find(
      (item) => item.id === payload
    );

    if (itemDelete !== undefined) {
      state.employeeFormer.push(itemDelete);
      commit("ADD_FORMER_EMPLOYEE", state.employeeFormer);
    }

    //delete employee
    const indexItemDelete: number | undefined = state.employeeList.findIndex(
      (item: EmployeeData) => item.id === payload
    );

    if (indexItemDelete !== undefined)
      state.employeeList.splice(indexItemDelete, 1);
  },
};
