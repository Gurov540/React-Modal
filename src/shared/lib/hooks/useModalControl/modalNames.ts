export const ModalNames = {
  reset: "reset" as const,
  loading: "loading" as const,
  success: "success" as const,
  error: "error" as const,
  addTask: "addTask" as const,
  login: "login" as const,
  register: "register" as const,
};

type ModalNameChecker<T extends { [K in keyof typeof ModalNames]: unknown }> =
  T;

export type SpecificModalDataType = ModalNameChecker<{
  reset: void;
  loading: void;
  success: string;
  error: string;
  addTask: void;
  login: string;
  register: string;
}>;
