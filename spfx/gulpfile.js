"use strict";

const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");
const TerserPlugin = require("terser-webpack-plugin-legacy");
const { merge } = require("webpack-merge");

//const path = require("path");

// warnings are aborting the ship task, so suppress them
//build.addSuppression(/Warning - \[sass\] The local CSS class .* is not camelCase and will not be type-safe./gi);
//build.addSuppression(/Warning - \[sass\] .* filename should end with module.scss/gi);
//build.addSuppression(/.*Cannot find source file.*/gi);
//build.addSuppression(/Warning - \[write-manifests\] Unable to resolve project ".*". Ensure it has been linked./gi);
//build.addSuppression(/Warning - \[configure-webpack\] Unable to resolve project ".*". Ensure it has been linked./gi);

// Set TypeScript compiler
// The on-board TypeScript compiler is super low on version
// This way we can use the latest version of typescript
const typeScriptConfig = require("@microsoft/gulp-core-build-typescript/lib/TypeScriptConfiguration");
typeScriptConfig.TypeScriptConfiguration.setTypescriptCompiler(require("typescript"));

// Replace UglifyJS with Terser
// UglifyJS doesn't support es6 syntax
// https://github.com/SharePoint/sp-dev-docs/issues/2782#issuecomment-475519680
build.configureWebpack.setConfig({
    additionalConfiguration: function (config) {
        let newConfig = config;
        config.plugins.forEach((plugin, i) => {
            if (plugin.options && plugin.options.mangle) {
                config.plugins.splice(i, 1);
                newConfig = merge(config, {
                    plugins: [new TerserPlugin()],
                });
            }
        });

        return newConfig;
    },
});

build.initialize(gulp);
