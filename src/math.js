const assertNumber = (n, name = 'n') => {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new TypeError(`${name} debe ser un número válido`);
  }
};

const assertInt = (n, name = 'n') => {
  assertNumber(n, name);
  if (!Number.isInteger(n)) {
    throw new TypeError(`${name} debe ser un entero`);
  }
};

const square = (n) => {
  assertNumber(n);
  return n * n;
};

const factorial = (n) => {
  assertInt(n);
  if (n < 0) throw new RangeError('n debe ser >= 0');
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

const is_prime = (n) => {
  assertInt(n);
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

const gcd = (a, b) => {
  assertInt(a, 'a');
  assertInt(b, 'b');
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

const lcm = (a, b) => {
  assertInt(a, 'a');
  assertInt(b, 'b');
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

export { square, factorial, is_prime, gcd, lcm };
