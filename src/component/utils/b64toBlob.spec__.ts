import { afterAll, beforeAll, describe, expect, it,vi } from 'vitest';

import { b64toBlob } from './b64toBlob';

beforeAll(() => {
  global.Blob = vi.fn().mockImplementation((byteArrays, options) => {
    return { byteArrays, options };
  });
});

afterAll(() => {
  delete global.Blob;
});

describe('b64toBlob', () => {
  // Arrange
  const b64Data = 'SGVsbG8gV29ybGQh'; // base64-encoded "Hello World!"
  // const invalidB64Data = 'not base64';
  const emptyB64Data = '';
  const contentType = 'text/plain';

  it('returns a Blob object', () => {
    // Act
    const blob = b64toBlob(b64Data, contentType);

    // Assert
    expect(blob).toBeInstanceOf(Blob);
  });

  it('returns a Blob object with the correct content type', () => {
    // Act
    const blob = b64toBlob(b64Data, contentType);

    // Assert
    expect(blob.type).toEqual(contentType);
  });

  it('throws an error if the input is not a string', () => {
    // Arrange
    const invalidInput = null;

    // Assert
    expect(() => {
      // Act
      // @ts-ignore
      b64toBlob(invalidInput);
    }).toThrow();
  });

  // it('throws an error if the input string is not a valid base64 string', () => {
  //   // Assert
  //   expect(() => {
  //     // Act
  //     b64toBlob(invalidB64Data, contentType);
  //   }).toThrow();
  // });

  it('returns an empty Blob object if the input string is empty', () => {
    // Act
    const blob = b64toBlob(emptyB64Data, contentType);

    // Assert
    expect(blob.size).toEqual(0);
  });

  it('works with different slice sizes', () => {
    // Act
    const blob512 = b64toBlob(b64Data, contentType, 512);
    const blob256 = b64toBlob(b64Data, contentType, 256);
    const blob1024 = b64toBlob(b64Data, contentType, 1024);

    // Assert
    expect(blob512.size).toEqual(12);
    expect(blob256.size).toEqual(12);
    expect(blob1024.size).toEqual(12);
  });
});
