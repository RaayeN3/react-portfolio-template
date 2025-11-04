// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Polyfills / test-environment shims for jsdom
// jsdom doesn't implement IntersectionObserver or window.scrollTo; some components rely on them.
// Provide lightweight mocks so tests don't throw at runtime.
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

// also expose on global for libraries that reference global.IntersectionObserver
(global as any).IntersectionObserver = IntersectionObserverMock;

// stub scrollTo used by App
if (typeof window.scrollTo !== "function") {
  window.scrollTo = () => {};
}
