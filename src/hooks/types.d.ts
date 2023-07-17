export type useCountReturnType = [
  count: number,
  doubleCount: number,
  increase: () => void,
  decrease: () => void,
  reset: () => void
];

export type useCountType = (
  initialValue?: number,
  step?: number
) => useCountReturnType;
