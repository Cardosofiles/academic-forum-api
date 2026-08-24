import { expect, test } from 'vitest';

import type { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repositoty';
import type { Question } from '@/domain/forum/enterprise/entities/question';

import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';

const fakeQuestionsRepository: QuestionsRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (question: Question) => {},
};

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta',
  });

  expect(question.id).toBeTruthy();
});
