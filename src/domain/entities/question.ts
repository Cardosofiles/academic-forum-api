import type { Slug } from "@/domain/entities/value-objects/slug.js";
import type { UniqueEntityId } from "@/core/entities/unique-entity-id";

import { Entity } from "@/core/entities/entity.js";

interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  content: string;
  slug: Slug;
}

export class Question extends Entity<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id);
  }
}
