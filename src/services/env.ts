interface EnvConfig {
  NODE_ENV: string
  STRIPE_API_KEY: string
}

class EnvService {
  private static env: EnvConfig = {
    NODE_ENV: process.env.NODE_ENV as string,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY as string,
  }

  public static stripeApiKey(): string {
    return this.env.STRIPE_API_KEY
  }
}

export default EnvService
