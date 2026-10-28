export class RedisOptions {
  constructor(
    public readonly url: string,
    public readonly ttlSeconds: number,
  ) {}
}
