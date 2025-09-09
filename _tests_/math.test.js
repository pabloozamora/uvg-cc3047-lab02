import { square, factorial, is_prime, gcd, lcm } from '../src/math';

describe('square', () => {
  test('happy paths', () => {
    expect(square(3)).toBe(9);
    expect(square(-4)).toBe(16);
  });
  test('errors', () => {
    expect(() => square('3')).toThrow(/n debe ser un número/);
    expect(() => square(NaN)).toThrow(/n debe ser un número/);
  });
});

describe('factorial', () => {
  test('happy paths', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
  });
  test('border cases/errors', () => {
    expect(() => factorial(-1)).toThrow(/>= 0/);
    expect(() => factorial(3.2)).toThrow(/entero/);
    expect(() => factorial('6')).toThrow(/n debe ser un número/);
  });
});

describe('is_prime', () => {
  test('happy paths', () => {
    expect(is_prime(2)).toBe(true);
    expect(is_prime(17)).toBe(true);
    expect(is_prime(18)).toBe(false);
  });
  test('border cases/errors', () => {
    expect(is_prime(0)).toBe(false);
    expect(is_prime(1)).toBe(false);
    expect(() => is_prime(2.5)).toThrow(/entero/);
  });
});

describe('gcd', () => {
  test('happy paths', () => {
    expect(gcd(54, 24)).toBe(6);
    expect(gcd(-54, 24)).toBe(6);
    expect(gcd(0, 5)).toBe(5);
  });
  test('errors', () => {
    expect(() => gcd('54', 24)).toThrow(/a debe ser un número/);
    expect(() => gcd(54, 2.2)).toThrow(/entero/);
  });
});

describe('lcm', () => {
  test('happy paths', () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(21, 6)).toBe(42);
  });
  test('border cases/errors', () => {
    expect(lcm(0, 5)).toBe(0);
    expect(() => lcm('4', 6)).toThrow(/a debe ser un número/);
    expect(() => lcm(4, 2.5)).toThrow(/entero/);
  });
});
