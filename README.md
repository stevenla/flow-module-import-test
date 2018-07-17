# flow-module-import-test

see https://github.com/facebook/flow/issues/6414

- repro for a flow issue where `import`ing from a lib outside of a module declaration results in `React.Component` resolving to `any`.
- If you run `flow` with the `import` outside the declaration, you should get an unused suppression error, which is wrong.
- Moving the `import` inside the declaration would make `<X />` invalid, since `X` has a required prop.
