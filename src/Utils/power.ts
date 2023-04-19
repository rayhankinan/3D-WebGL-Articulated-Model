export function isPowerOfTwo(value: number) {
  return (value & (value - 1)) == 0;
}
