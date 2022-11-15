// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
  apiEndpoints: {
    products: 'https://5w6f3x0etb.execute-api.ap-south-1.amazonaws.com',
    product: 'https://5w6f3x0etb.execute-api.ap-south-1.amazonaws.com',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://i2u7uxt0ob.execute-api.ap-south-1.amazonaws.com/dev',
    bff: 'https://5w6f3x0etb.execute-api.ap-south-1.amazonaws.com',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    products: true,
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
