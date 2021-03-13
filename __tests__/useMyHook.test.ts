import { renderHook } from '@testing-library/react-hooks';

import { useMyHook } from '../src';

describe('useMyHooks', () => {
  beforeEach(() => {
    // ...
  });

  afterEach(() => {
    // ...
  });

  it('should sum two numbers: 2, 3', () => {
    const { result } = renderHook(() => useMyHook());

    expect(result.sum(2, 3)).toBe(5);
  });
});
