import ccpa from 'crypto-pro-cadesplugin';
import { useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useGetCertificate } from './useGetCertificate';

vi.mock('react');
vi.mock('crypto-pro-cadesplugin');

/**
 * Mock Default.
 *
 * @returns {void}
 */
const mockDefault = () => {
  useState.mockReturnValue(['certificate', vi.fn()]);
  useEffect.mockImplementation((effect) => effect());
  ccpa.mockResolvedValue({
    getCertsList: vi.fn().mockResolvedValue([]),
  });
};

describe('🐛 spec useGetCertificate', () => {
  it('🧪 default', () => {
    expect.hasAssertions();

    //☣️ Arrange
    mockDefault();

    //🔥 Act
    const certificate = useGetCertificate('thumbprint', vi.fn());

    //❓ Assert
    expect(certificate).toBe('certificate');
  });

  it('🧪 передает ошибку загрузки плагина в callbackError', async () => {
    expect.hasAssertions();

    //☣️ Arrange
    mockDefault();
    const callbackError = vi.fn();

    //🧹 clear mock
    ccpa.mockRejectedValue(new Error('Плагин недоступен'));

    //🔥 Act
    useGetCertificate('thumbprint', callbackError);

    //❓ Assert
    await vi.waitFor(() => {
      expect(callbackError).toHaveBeenCalledWith('Error: Плагин недоступен');
    });
  });

  it('🧪 игнорирует ответ предыдущего запроса', async () => {
    expect.hasAssertions();

    //☣️ Arrange
    mockDefault();
    const setCertificate = vi.fn();
    let cleanup;

    //🧹 clear mock
    useState.mockReturnValue(['certificate', setCertificate]);
    useEffect.mockImplementation((effect) => {
      cleanup = effect();
    });

    //🔥 Act
    useGetCertificate('thumbprint', vi.fn());
    cleanup();
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });

    //❓ Assert
    expect(setCertificate).not.toHaveBeenCalled();
  });
});
