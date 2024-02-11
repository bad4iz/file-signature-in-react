import { describe, expect, it } from 'vitest';

import { toBase64 } from './toBase64';
describe('toBase64', () => {
  it('default', async () => {
    expect.hasAssertions();
    // ☣️  Arrange (всякие моки)
    const file = new File(['foo'], 'foo.txt', {
      type: 'text/plain',
    });
    //🔥 Act
    const res = await toBase64(file);

    //❓ Assert
    expect(res).toBe('data:text/plain;base64,Zm9v');
  });
});
