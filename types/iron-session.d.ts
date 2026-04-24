// Type shim for iron-session v8 — their package.json exports field doesn't map types
// properly with moduleResolution: "bundler". This minimal declaration keeps things working.
declare module 'iron-session' {
  export interface SessionOptions {
    cookieName: string;
    password: string | Record<string, string>;
    ttl?: number;
    cookieOptions?: any;
  }
  export type IronSession<T> = T & {
    readonly save: () => Promise<void>;
    readonly destroy: () => void;
  };
  interface CookieStore {
    get: (name: string) => { name: string; value: string } | undefined;
    set: any;
  }
  export function getIronSession<T extends object>(cookies: CookieStore, options: SessionOptions): Promise<IronSession<T>>;
  export function getIronSession<T extends object>(req: any, res: any, options: SessionOptions): Promise<IronSession<T>>;
}
