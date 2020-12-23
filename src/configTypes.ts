
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
  


// We use types instead of interfaces here because we can more easily set the entire thing as readonly.
// Unfortunately, interfaces can't be quickly set as readonly in Typescript without marking each and
// every property as readonly along the way.

export type AweSomeHTTPConfig = Readonly<AweSomeHTTPConfigInterface>;
export type AweSomeHTTPSwitchConfig = Readonly<AweSomeHTTPSwitchConfigInterface>;