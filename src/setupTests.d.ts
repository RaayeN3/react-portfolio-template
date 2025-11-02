/// <reference types="jest" />

// Add minimal matcher augmentation so TypeScript recognizes common jest-dom matchers
// (keeps things targeted and avoids depending on package resolution in CI/local envs)
declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    // add others here as needed
  }
}

// Some @types/jest versions expose matchers as a global `JestMatchers` interface
// so augment that as well to cover both typings variants.
declare global {
  interface JestMatchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
  }
}

// Intentionally no exports so this file is treated as a global augmentation (.d.ts global scope)
