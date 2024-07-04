import type { FunctionComponent, PropsWithChildren } from "react";

export interface HOCFunctionalComponent<T = {}>
  extends FunctionComponent<PropsWithChildren<T>> {}
