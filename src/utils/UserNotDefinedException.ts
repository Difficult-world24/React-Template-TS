export class UserNotDefinedException extends Error {
  constructor() {
    super("user.not.defined");
  }
}
