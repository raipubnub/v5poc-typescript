import { Logger } from "../../modules/log/Logger";
import { Networking } from "../../modules/net/Networking";
import { Parser } from "../../modules/parse/Parser";

export class DeleteHistoryDelete {
  private httpMethod: string = 'delete';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(subKey: string, channels: string, start: unknown, end: unknown, signature: string, timestamp: number): boolean {

    if (typeof (subKey) !== 'string') {
      return false;
    }

    if (typeof (channels) !== 'string') {
      return false;
    }

    if (typeof (start) !== 'number') {
      return false;
    }

    if (typeof (end) !== 'number') {
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

  static execute(subKey: string, channels: string, start: unknown, end: unknown, signature: string, timestamp: number): boolean {
    // ...
    return true;
  }

}