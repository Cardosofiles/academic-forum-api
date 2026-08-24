import { beforeEach, describe, expect, it } from 'vitest';

import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';
import { InMemoryQuestionsRepository } from '@test/unit/domain/forum/application/repositories/in-memory-questions-repository';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe('Create Question Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });

  it('should create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionsRepository.items[0]?.id).toEqual(question.id);
  });
});
