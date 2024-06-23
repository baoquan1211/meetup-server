import { signal } from "@preact/signals-react";

export const authSignal = signal({
  accessToken: signal<string | undefined>(undefined),
  email: signal<string | undefined>(undefined),
});
