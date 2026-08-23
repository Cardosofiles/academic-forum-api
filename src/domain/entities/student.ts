import type { UniqueEntityId } from "@/core/entities/unique-entity-id";
import type { Optional } from "@/core/types/optional";

import { Entity } from "@/core/entities/entity.js";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityId) {
    const student = new Student(props, id);
    return student;
  }
}
