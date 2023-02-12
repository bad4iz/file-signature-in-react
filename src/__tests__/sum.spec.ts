/* eslint-disable */
import { describe, it, expect } from 'vitest';

import { sum } from './sum';

describe('file sum', () => {
  it('should', () => {
    expect.hasAssertions();
    // Arrange (всякие моки)

    // Act
    const result = sum(1, 3);

    // Assert
    expect(result).toBe(4);
  });
});
