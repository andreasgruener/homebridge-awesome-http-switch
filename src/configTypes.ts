
export interface AweSomeHTTPSwitchConfigInterface {
    name : string,
    statusUrl: string,
    httpMethod: string,
    contentType: string,
    onUrl: string,
    offUrl: string
}

export interface AweSomeHTTPConfigInterface {
    name: string,
    baseurl: string,
    displayName: string,
    cacheExpiration: number,
    switches: AweSomeHTTPSwitchConfig[],
    model : string,
    manufacturer : string
  }

export type AweSomeHTTPConfig = Readonly<AweSomeHTTPConfigInterface>;
export type AweSomeHTTPSwitchConfig = Readonly<AweSomeHTTPSwitchConfigInterface>;