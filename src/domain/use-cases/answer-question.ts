import type { AnswersRepository } from "@/domain/repositories/answers-repository.js";

import { Answer } from "@/domain/entities/answer.js";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}
