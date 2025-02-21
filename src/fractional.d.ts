declare module "fractional" {
  export class Fraction {
    numerator: number;
    denominator: number;
    constructor(numerator: number, denominator: number);
    toString(): string;
  }
}
