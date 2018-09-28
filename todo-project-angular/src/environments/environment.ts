// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  prefix: 'ngx_',      // default: 'ngx_'
  clearType: 'prefix', // default: 'prefix'
  mutateObjects: true, // default: true
  debugMode: false,    // you can enable debug logs if you ever meet any bug to localize its source
  cookiesScope: '',    // what you pass here will actually prepend base domain
  cookiesCheckInterval: 0, // number in ms describing how often cookies should be checked for changes
  previousPrefix: 'angular2ws_', // you have to set it only if you were using custom prefix in old version ('angular2ws_' is a default value)
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
