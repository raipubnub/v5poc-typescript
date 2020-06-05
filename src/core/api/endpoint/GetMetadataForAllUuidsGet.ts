import { Logger } from "../../modules/log/Logger";
import { Networking } from "../../modules/net/Networking";
import { Parser } from "../../modules/parse/Parser";

export class GetMetadataForAllUuidsGet {
  private httpMethod: string = 'get';

  constructor(
    public net: Networking,
    public parse: Parser,
    public log: Logger,
  ) {}

  static validate(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]): boolean {

    if (!Array.isArray(include)) {
      return false;
    }

    if (!Number.isInteger(limit)) {
      return false;
    }

    if (typeof (start) !== 'string') {
      return false;
    }

    if (typeof (end) !== 'string') {
      return false;
    }

    if (typeof (count) !== 'boolean') {
      return false;
    }

    if (typeof (filter) !== 'string') {
      return false;
    }

    if (!Array.isArray(sort)) {
      return false;
    }

    return true;
  }

  static execute(include: string[], limit: number, start: string, end: string, count: boolean, filter: string, sort: string[]): boolean {
    // ...
    return true;
  }

}