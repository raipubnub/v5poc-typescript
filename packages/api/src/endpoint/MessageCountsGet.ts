import {
  Logger,
  Parser,
  Networking,
  TokenManager,
} from "pubnub-core";

export class MessageCountsGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
    public token: TokenManager,
  ) {}

  static validate(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (timetoken) !== 'number') {
      return false;
    }

    if (typeof (channelsTimetoken) !== 'string') {
      return false;
    }

    if (typeof (signature) !== 'string') {
      return false;
    }

    if (!Number.isInteger(timestamp)) {
      return false;
    }

    return true;
  }

  static execute(subKey: string, channels: string, auth: string, timetoken: unknown, channelsTimetoken: string, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}