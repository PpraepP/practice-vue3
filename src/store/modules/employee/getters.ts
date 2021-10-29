import { GetterTree } from "vuex";
import { RootState } from "@/store";
import { State } from "./state";
import type { EmployeeData } from "./state";

export type Getters = {
  getEmployeeList(state: State): EmployeeData[];
  getFormerEmpList(state: State): EmployeeData[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  getEmployeeList: (state) => state.employeeList,
  getFormerEmpList: (state) => state.employeeFormer,
};
