export class JwtOptions {
  constructor(
    public readonly secret: string,
    public readonly expiresIn: string,
  ) {}
}
