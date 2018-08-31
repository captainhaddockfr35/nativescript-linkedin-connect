import { Observable } from 'tns-core-modules/data/observable';
import { LinkedinConnect } from 'nativescript-linkedin-connect';

export class HelloWorldModel extends Observable {
  public message: string;
  private linkedinConnect: LinkedinConnect;

  constructor() {
    super();

    this.linkedinConnect = new LinkedinConnect();
    this.message = this.linkedinConnect.message;
  }
}
