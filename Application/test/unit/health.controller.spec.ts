import { HealthController } from '../../src/health/health.controller';

describe('HealthController', () => {
  it('reports a healthy service', () => {
    const result = new HealthController().check();

    expect(result.status).toBe('ok');
    expect(() => new Date(result.timestamp)).not.toThrow();
  });
});
