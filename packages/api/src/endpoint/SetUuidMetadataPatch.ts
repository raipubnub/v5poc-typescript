import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class SetUuidMetadataPatch {
  private httpMethod: string = 'patch';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(include: string[]): boolean {

    if (!Array.isArray(include)) {
      return false;
    }

    return true;
  }

  static execute(include: string[]): boolean {
    // ...
    return true;
  }

}