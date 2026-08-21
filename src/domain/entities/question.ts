import type { Slug } from "@/domain/entities/value-objects/slug.js";

import { Entity } from "@/core/entities/entity.js";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: string;
}

export class Question extends Entity<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id);
  }
}
