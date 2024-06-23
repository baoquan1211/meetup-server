import { signal } from "@preact/signals-react";

export const authSignal = signal({
  accessToken: signal<string | undefined>(undefined),
  refreshToken: signal<string | undefined>(undefined),
});
