interface RandomNumberProps {
  min: number;
  max: number;
}

// Random number(inclusive of min and max)
export const randomNumber = ({ min, max }: RandomNumberProps): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};