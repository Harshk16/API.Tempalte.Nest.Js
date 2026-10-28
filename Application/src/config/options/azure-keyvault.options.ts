export class AzureKeyVaultOptions {
  constructor(
    public readonly enabled: boolean,
    public readonly vaultUrl?: string,
  ) {}
}
