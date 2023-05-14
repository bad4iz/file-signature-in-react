import ccpa from 'crypto-pro-cadesplugin';
import { useMemo, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useGetCertificate } from './useGetCertificate';

vi.mock('react');
vi.mock('crypto-pro-cadesplugin');

describe('useGetCertificate', () => {
  it('should return the certificate', async () => {
    // Arrange
    const thumbprint = 'thumbprint1';
    useState.mockReturnValue(['aaa', (_) => _]);

    // Act
    const certificate = useGetCertificate(thumbprint);

    // Assert
    expect(certificate).toBe('aaa');
  });

  it('useMemo called with', async () => {
    // Arrange
    const thumbprint = 'thumbprint-1';
    const setCertificateSpy = vi.fn();
    useState.mockReturnValue(['aaa', setCertificateSpy]);
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
    useGetCertificate(thumbprint);

    // Assert
    expect(useMemo).toHaveBeenCalledWith(expect.any(Function), [thumbprint]);
  });
});
