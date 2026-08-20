import { describe, expect, it } from 'vitest';

import { checkQuotes } from './checkQuotes';

describe('checkQuotes', () => {
  it('должно возвращать значение true для пустой строки', () => {
    expect.hasAssertions();

    // 🔥 Act
    const res = checkQuotes('');

    // ❓ Assert
    expect(res).toBe(true);
  });

  it('должен возвращать значение true для строки с четным числом кавычек', () => {
    expect.hasAssertions();

    // ❓ Assert
    expect(checkQuotes('""')).toBe(true);
    expect(checkQuotes('"Hello"')).toBe(true);
    expect(checkQuotes('"a "b" c"')).toBe(true);
    expect(checkQuotes('This is a "test" string.')).toBe(true);
  });

  it('должен возвращать значение false для строки с нечетным числом кавычек', () => {
    expect.hasAssertions();

    // ❓ Assert
    expect(checkQuotes('"')).toBe(false);
    expect(checkQuotes('"""')).toBe(false);
    expect(checkQuotes('"Hello world')).toBe(false);
    expect(checkQuotes('This is an "odd string.')).toBe(false);
  });
});
