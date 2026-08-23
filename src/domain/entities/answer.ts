import type { UniqueEntityId } from "@/core/entities/unique-entity-id";

import { Entity } from "@/core/entities/entity.js";

interface AnswerProps {
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content(): string {
    return this.props.content;
  }

  constructor(props: AnswerProps, id?: string) {
    super(props, id);
  }
}
