import { expect, test } from "vitest";

import { AnswerQuestionUseCase } from "@/domain/use-cases/answer-question.js";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
