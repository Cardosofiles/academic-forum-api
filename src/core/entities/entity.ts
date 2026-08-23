import { UniqueEntityId } from "@/core/entities/unique-entity-id";

export class Entity<T> {
  private _id: UniqueEntityId;
  protected props: T;

  get id() {
    return this._id;
  }

  protected constructor(props: any, id?: UniqueEntityId) {
    this.props = props;
    this._id = id ?? new UniqueEntityId();
  }
}
