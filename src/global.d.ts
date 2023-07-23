let isDev: boolean;
type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [k: string | number]: JSONValue }
  | JSONValue[];
