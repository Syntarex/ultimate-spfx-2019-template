# Ultimate SPFx 2019

TBD

## Notes

-   higher node version could be possible by disabling the sass-task. we dont need it either because we are going by stylex

-   ````"pnpm": {
          "overrides": {
              "graceful-fs": "^4.2.11"
          }
      }``` needed for nodejs14 -> fixes "primordials not defined"
    ````

-   if typescript of webpack getting higher use different lodash types version: https://www.npmjs.com/package/@types/lodash?activeTab=versions

## Unfixed

-   [DEP0066] DeprecationWarning: OutgoingMessage.prototype.\_headers is deprecated

## TODOs

-   eslint in component (+@tanstack/eslint-plugin-query)
-   docs
-   clean up dist in webpart because every hot reload does a copy of component package
-   sourcemapping of component package doesnt work
