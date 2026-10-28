export class DatabaseOptions {
  constructor(
    public readonly url: string,
    public readonly synchronize: boolean,
    public readonly logging: boolean,
  ) {}
}
