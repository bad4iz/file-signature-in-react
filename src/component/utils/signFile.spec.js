import { describe, expect, it } from 'vitest';

import { signFile } from './signFile'; // Replace 'yourFileName' with the actual name of your TypeScript file

describe('signFile.spec', () => {
  it('default', () => {
    expect.hasAssertions();
    // ☣️  Arrange (всякие моки)

    //🔥 Act
    const res = signFile('');

    //❓ Assert
    expect(res).toBe(1);
  });
});
