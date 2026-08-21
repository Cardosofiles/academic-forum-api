import { Entity } from "@/core/entities/entity.js";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer extends Entity<AnswerProps> {
  get content(): string {
    return this.props.content;
  }

  constructor(props: AnswerProps, id?: string) {
    super(props, id);
  }
}
