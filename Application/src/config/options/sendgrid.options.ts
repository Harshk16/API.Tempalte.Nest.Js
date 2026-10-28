export class SendGridOptions {
  constructor(
    public readonly apiKey: string,
    public readonly fromEmail: string,
  ) {}
}
