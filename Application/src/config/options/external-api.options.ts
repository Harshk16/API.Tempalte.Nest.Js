export class ExternalApiOptions {
  constructor(
    public readonly baseUrl: string,
    public readonly timeoutMs: number,
  ) {}
}
