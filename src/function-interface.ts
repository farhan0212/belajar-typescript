export interface AddFunction {
  (value1: number, value2: number): number;
}

const add: AddFunction = (value1, value2) => {
  return value1 + value2;
};
