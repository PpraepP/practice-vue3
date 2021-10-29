export interface EmployeeData {
  id: string;
  name: string;
  age: number;
  isOriginalMember: boolean;
}

// export interface EmployeeDataList extends Array<EmployeeData>{}

// export interface State2 {
//   count: number;
// }

export interface State {
  employeeList: EmployeeData[];
  employeeFormer: EmployeeData[];
  employeeLastID: string;
}

export const state: State = {
  employeeList: [
    {
      id: "0001",
      name: "Nicole Leonard",
      age: 22,
      isOriginalMember: false,
    },
    { id: "0002", name: "Gloria Hamer", age: 38, isOriginalMember: true },
    {
      id: "0003",
      name: "Blaine Rasmussen",
      age: 24,
      isOriginalMember: true,
    },
    { id: "0004", name: "Jameel Phelps", age: 51, isOriginalMember: false },
  ],
  employeeFormer: [],
  employeeLastID: "",
};

// export default createStore({
//     namespaced: true
// })
// export const store: Module<S, R> = {

// }
