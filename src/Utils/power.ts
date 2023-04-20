function isPowerOfTwo(value: number) {
  return (value & (value - 1)) === 0;
}

export default isPowerOfTwo;
