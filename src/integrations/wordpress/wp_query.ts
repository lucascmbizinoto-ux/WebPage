export class WP_Query {
  constructor(params: WPQueryParams) { this.params = params; }
  params: WPQueryParams;
}

export type WPQueryParams = Record<string, string | number | boolean | string[] | number[] | undefined>;
