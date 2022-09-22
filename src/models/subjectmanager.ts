import { Subject } from "rxjs";

export class SubjectManager<T> {
  private _subject = new Subject<T>();

  get getSubject() {
    return this._subject.asObservable();
  }

  set setSubject(value: T) {
    this._subject.next(value);
  }
}
