export const ModalNames = {
  login: "login" as const,
  register: "register" as const,
  loading: "loading" as const,
  error: "error" as const,
  task: "task" as const,
  board: "board" as const,
};

type ModalNameChecker<T extends { [K in keyof typeof ModalNames]: unknown }> =
  T;

export type SpecificModalDataType = ModalNameChecker<{
  login: void;
  register: void;
  loading: void;
  error: void;
  task: void;
  board: void;
}>;
