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

-   serve mechanism with external script load so webpack doesnt run forever and we got hot reload
-   eslint in component
-   docs

## Links

-   maybe relevant later? https://github.com/microsoft/rushstack/tree/main/webpack/loader-raw-script
