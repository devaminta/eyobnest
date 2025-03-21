import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Utility } from "../../common/util/url"
import { ConfigurationServiceObject } from './configuration.service.object'

@Injectable()
export class ConfigurationService {
  constructor(private manager: ConfigService) { }

  get(key: string, valueDefault?: string): string {
    return this.manager.get(key, valueDefault)
  }

  getAccessSignToken() {
    return this.manager.get(ConfigurationServiceObject.Key.ACCESS_TOKEN)
  }

  getPort(): number {
    return this.manager.get(ConfigurationServiceObject.Key.PORT, 3099)
  }

  getNumber(key: string, valueDefault?: number): number {
    return this.manager.get<number>(key, valueDefault)
  }

  getBoolean(key: string, valueDefault?: boolean): boolean {
    return this.manager.get<boolean>(key, valueDefault)
  }

  getEnvironment(): ConfigurationServiceObject.Environment {
    const value = this.get(
      ConfigurationServiceObject.Key.ENVIRONMENT,
      ConfigurationServiceObject.Environment.DEVELOPMENT,
    )

    return value as ConfigurationServiceObject.Environment
  }


  getClientBaseUrl(): string {
    const value = this.manager.get(
      ConfigurationServiceObject.Key.CLIENT_BASE_URL,
    )
    const valueClean = Utility.removeTrailingSlash(value)
    return valueClean
  }

  getBaseUrl(): string {
    const port = this.getPort()
    const value = this.manager.get(
      ConfigurationServiceObject.Key.BASE_URL,
      `http://localhost:${port}`,
    )

    const valueClean = Utility.removeTrailingSlash(value)
    return valueClean
  }

  isEnvironmentDevelopment(): boolean {
    return (
      this.getEnvironment() ===
      ConfigurationServiceObject.Environment.DEVELOPMENT
    )
  }

  isEnvironmentProduction(): boolean {
    return (
      this.getEnvironment() ===
      ConfigurationServiceObject.Environment.PRODUCTION
    )
  }
  isEnvironmentStaging(): boolean {
    return (
      this.getEnvironment() ===
      ConfigurationServiceObject.Environment.STAGING
    )
  }
}
