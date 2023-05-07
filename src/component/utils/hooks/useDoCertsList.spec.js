import ccpa from 'crypto-pro-cadesplugin';
import { useMemo } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useDoCertsList } from './useDoCertsList';

vi.mock('crypto-pro-cadesplugin');
vi.mock('react');

describe('useDoCertsList', () => {
  it('returns the expected certificates list', async () => {
    expect.hasAssertions();
    // Arrange (всякие моки)
    const mockGetCertsList = vi.fn(() => [
      { subjectInfo: 'CN=Test Certificate 1', thumbprint: 'thumbprint-1' },
      { subjectInfo: 'CN=Test Certificate 2', thumbprint: 'thumbprint-2' },
      { subjectInfo: 'CN=Test Certificate 3', thumbprint: 'thumbprint-3' },
    ]);

    ccpa.mockImplementation(() => {
      return { getCertsList: mockGetCertsList };
    });
    useMemo.mockImplementation((fn) => fn());

    // Act
    const certificateList = await useDoCertsList();

    // Assert
    expect(certificateList).toEqual([
      { label: 'Test Certificate 1', value: 'thumbprint-1' },
      { label: 'Test Certificate 2', value: 'thumbprint-2' },
      { label: 'Test Certificate 3', value: 'thumbprint-3' },
    ]);
  });

  it('useMemo called with', async () => {
    expect.hasAssertions();
    // Arrange (всякие моки)
    const mockGetCertsList = vi.fn(() => []);

    ccpa.mockImplementation(() => {
      return { getCertsList: mockGetCertsList };
    });
    useMemo.mockImplementation((fn) => fn());

    // Act
    await useDoCertsList();

    // Assert
    expect(useMemo).toHaveBeenCalledWith(expect.any(Function), []);
  });
});
