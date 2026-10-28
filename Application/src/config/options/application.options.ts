import { Environment } from '../../common/enums';

export class ApplicationOptions {
  constructor(
    public readonly name: string,
    public readonly environment: Environment,
    public readonly port: number,
    public readonly apiPrefix: string,
  ) {}
}
