import { expect, test } from 'vitest';

import type { AnswersRepository } from '@/domain/repositories/answers-repository.js';

import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question.js';

const makeAnswersRepository: AnswersRepository = {
  create: () => Promise.resolve(),
};

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(makeAnswersRepository);

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  });

  expect(answer.content).toEqual('Nova resposta');
});
