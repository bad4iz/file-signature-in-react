import { describe, expect, it, vi } from 'vitest';

import { b64toBlob } from './b64toBlob';
import { signFile } from './signFile';
import { toBase64 } from './toBase64';

vi.mock('./b64toBlob');
vi.mock('./toBase64');

describe('signFile.spec', () => {
  it('default', async () => {
    expect.hasAssertions();
    // ☣️  Arrange (всякие моки)

    //🔥 Act
    const res = await signFile('');

    //❓ Assert
    expect(res).toStrictEqual({
      blob: null,
      fileName: null,
    });
  });
});
