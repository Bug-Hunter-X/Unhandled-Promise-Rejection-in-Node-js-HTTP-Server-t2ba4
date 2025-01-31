# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The code simulates an HTTP server that performs an asynchronous operation which may fail.  If the operation fails, the error isn't properly handled, leading to a potential crash or unexpected behavior.

## Bug Description
The provided `bug.js` file contains an HTTP server that uses a promise within its request handler. When the asynchronous operation within `doSomethingAsync()` throws an error (simulated 50% of the time), the error isn't caught. This results in an unhandled promise rejection, which might not be immediately visible but can lead to instability in a production environment.

## Solution
The `bugSolution.js` file demonstrates the correct approach.  It properly handles the potential error using a `try...catch` block within the `async` function or by attaching `.catch()` directly to the promise chain.