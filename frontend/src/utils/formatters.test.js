import { describe, it, expect } from 'vitest';
import { truncateText } from './formatters';

describe('truncateText', () => {
  it('should return empty string if input is empty', () => {
    expect(truncateText('')).toBe('');
  });

  it('should not truncate text shorter than maxLength', () => {
    expect(truncateText('Hello world', 20)).toBe('Hello world');
  });

  it('should truncate text longer than maxLength and add ellipsis', () => {
    expect(truncateText('This is a very long post content that needs truncation', 10)).toBe('This is a ...');
  });
});
