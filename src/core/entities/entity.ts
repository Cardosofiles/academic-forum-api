import { randomUUID } from "node:crypto";

export class Entity<T> {
  private _id: string;
  protected props: T;

  get id(): string {
    return this._id;
  }

  constructor(props: any, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
