// Demo adapter: the log form supplies one string, so no Node util formatting is needed.
export function format(message) {
  return String(message ?? "");
}
