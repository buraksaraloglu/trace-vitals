# trace-vitals

`trace-vitals` is a small script that traces the web-vitals and sends the reports to the given endpoint. The following metrics are collected:

- [First Contentful Paint (FCP)](https://web.dev/fcp/)
- [Time to First Byte (TTFB)](https://en.wikipedia.org/wiki/Time_to_first_byte)

## Installation

To use `trace-vitals` in your app, install it via npm as production dependencies:

`npm install trace-vitals --save`

## Basic usage

The simplest usage of `trace-vitals` looks something like this:

```javascript
import traceVitals from 'trace-vitals';

window.addEventListener("load", () => {
  traceVitals.then(({ traceVitals }) => {
    traceVitals("http://localhost:3000/analytics");
  });
});
```
