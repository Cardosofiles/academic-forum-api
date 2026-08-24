import { expect, test } from 'vitest';

import { Slug } from '@/domain/entities/value-objects/slug.js';

test('it should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Example question title');

  expect(slug.value).toBe('example-question-title');
});
