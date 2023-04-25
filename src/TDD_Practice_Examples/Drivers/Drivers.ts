// Create a function that returns a DriverStatus enum value
// based on a given age.
// too young is age less than 16
// too old are ages greater than 85
// eligible is any ages between 16 and 85

export enum DriverStatus {
  TOO_YOUNG = "too young",
  TOO_OLD = "too old",
  ELIGIBLE = "eligible",
}

export function getAge(a: number): string {
  return a < 16
    ? DriverStatus.TOO_YOUNG
    : a > 85
    ? DriverStatus.TOO_OLD
    : DriverStatus.ELIGIBLE;
}

