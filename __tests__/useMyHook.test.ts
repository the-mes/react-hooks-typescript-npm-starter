import { renderHook } from '@testing-library/react-hooks';
import { useMyHook } from '../src';

describe('useMyHook', () => {
  beforeEach(() => {
    // ...
  });

  afterEach(() => {
    // ...
  });

  it('should sum two numbers: 2, 3', () => {
    const { result } = renderHook(() => useMyHook());

    expect(result.current.sum(2, 3)).toBe(5);
  });
});
