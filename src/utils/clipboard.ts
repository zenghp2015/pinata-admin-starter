import useClipboard from "vue-clipboard3";

export function copy(text: string) {
  const { toClipboard } = useClipboard();
  return toClipboard(text);
}
