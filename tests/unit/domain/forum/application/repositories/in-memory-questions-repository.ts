import type { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repositoty';
import type { Question } from '@/domain/forum/enterprise/entities/question';

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = [];

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug);

    if (!question) {
      return Promise.resolve(null);
    }

    return question;
  }

  async create(question: Question): Promise<void> {
    this.items.push(question);
    return Promise.resolve();
  }
}
