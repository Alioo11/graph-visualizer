export interface IGridGraphForm {
  width: number;
  height: number;
  entryPoint: [number, number];
  targetList: Array<[number, number]>;
  gap: number;
}

export interface IRandomizedGraphForm {
  size: number;
}
