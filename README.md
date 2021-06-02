## Gatsby vale pre-build hook

This small demo illustrates how the [Vale spell checker](https://www.npmjs.com/package/@ocular-d/vale-bin) can be integrated into the Gatsby build lifecycle.

The vale-pre-build-hook.js exports a Gatsby lifecycle hook that will be later called before the build stage starts. 
The hook spawns a child process and waits for it to finish. The build continues after the spell check finishes or fails in case of a non-zero process exit code.