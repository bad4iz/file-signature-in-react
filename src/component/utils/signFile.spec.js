import ccpa from 'crypto-pro-cadesplugin';
import { describe, expect, it, vi } from 'vitest';

import { b64toBlob } from './b64toBlob';
import { signFile } from './signFile';
import { toBase64 } from './toBase64';

vi.mock('./b64toBlob');
vi.mock('./toBase64');
vi.mock('crypto-pro-cadesplugin');

/**
 * Mock default.
 * @returns {void}
 */
const defaultMock = () => {
  const signBase64Spy = vi.fn().mockResolvedValue('');
  b64toBlob.mockReturnValue('b64toBlob');
  toBase64.mockReturnValue('');

  ccpa.mockResolvedValue({
    signBase64: signBase64Spy,
  });
};

describe('signFile.spec', () => {
  it('default', async () => {
    expect.hasAssertions();

    // ☣️  Arrange (всякие моки)
    defaultMock();

    //🔥 Act
    const res = await signFile('');

    //❓ Assert
    expect(res).toStrictEqual({
      blob: null,
      fileName: null,
    });
  });
  it('нет файла', async () => {
    expect.hasAssertions();
    // ☣️  Arrange (всякие моки)
    defaultMock();

    //🔥 Act
    const res = await signFile({ file: null });

    //❓ Assert
    expect(res).toStrictEqual({
      blob: null,
      fileName: null,
    });
  });

  it('есть файл', async () => {
    expect.hasAssertions();
    // ☣️  Arrange (всякие моки)
    defaultMock();

    const file = {
      blob: 'type:superType;base64,_body file_',
      name: 'nameFile',
    };
    const thumbprint = 'thumbprint';
    toBase64.mockImplementation((file) => file.blob);

    const signBase64Spy = vi.fn().mockResolvedValue('sign');
    ccpa.mockResolvedValue({
      signBase64: signBase64Spy,
    });

    //🔥 Act
    const res = await signFile({ file, thumbprint });

    //❓ Assert
    expect(toBase64).toHaveBeenCalledWith(file);
    expect(signBase64Spy).toHaveBeenCalledWith(thumbprint, '_body file_');
    expect(b64toBlob).toHaveBeenCalledWith('sign', 'superType');

    expect(res).toStrictEqual({
      blob: 'b64toBlob',
      fileName: 'nameFile.sig',
    });
  });
});
