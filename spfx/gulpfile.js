"use strict";

const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");

// Set TypeScript compiler
// The on-board TypeScript compiler is super low on version
// This way we can use the latest version of typescript
const typeScriptConfig = require("@microsoft/gulp-core-build-typescript/lib/TypeScriptConfiguration");
typeScriptConfig.TypeScriptConfiguration.setTypescriptCompiler(require("typescript"));

build.initialize(gulp);
