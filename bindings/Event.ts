// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Choice } from "./Choice";
import type { Next } from "./Next";

export interface Event { text: string, next: Array<Next> | null, effects: Record<string, boolean> | null, choices: Array<Choice> | null, }