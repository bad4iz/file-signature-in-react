import { describe, expect, it } from 'vitest';

import { b64toBlob } from './b64toBlob';

describe('b64toBlob', () => {
  // Arrange
  const b64Data = 'SGVsbG8gV29ybGQh'; // base64-encoded "Hello World!"
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

  it('should convert base64 data string to a Blob object', () => {
    // Arrange
    const b64Data =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTw%3D%3D';
    const contentType = 'image/png';

    // Act
    const blob = b64toBlob(b64Data, contentType);

    // Assert
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe(contentType);
  });
});
