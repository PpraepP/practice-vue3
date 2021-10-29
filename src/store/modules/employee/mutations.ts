import { MutationTree } from "vuex";
import { State, EmployeeData } from "./state";
// import type { EmployeeData } from "./state";

export type Mutations<S = State> = {
  SET_EMP_LAST_ID(state: S, payload: string): void;
  ADD_EMPLOYEE(state: S, payload: EmployeeData): void;
  DELETE_EMPLOYEE(state: S, payload: EmployeeData[]): void;
  ADD_FORMER_EMPLOYEE(state: S, payload: EmployeeData[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  SET_EMP_LAST_ID(state: State, payload: string) {
    state.employeeLastID = payload;
  },
  ADD_EMPLOYEE(state: State, payload: EmployeeData) {
    state.employeeList.push(payload);
  },
  DELETE_EMPLOYEE(state: State, payload: EmployeeData[]) {
    state.employeeList = payload;
  },
  ADD_FORMER_EMPLOYEE(state: State, payload: EmployeeData[]) {
    state.employeeFormer = payload;
  },
};
