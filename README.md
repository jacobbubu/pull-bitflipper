# @jacobbubu/pull-bitflipper

[![Build Status](https://github.com/jacobbubu/pull-bitflipper/workflows/Build%20and%20Release/badge.svg)](https://github.com/jacobbubu/pull-bitflipper/actions?query=workflow%3A%22Build+and+Release%22)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/pull-bitflipper/badge.svg)](https://coveralls.io/github/jacobbubu/pull-bitflipper)
[![npm](https://img.shields.io/npm/v/@jacobbubu/pull-bitflipper.svg)](https://www.npmjs.com/package/@jacobbubu/pull-bitflipper/)

> Rewritten [pull-bitflipper](https://github.com/dominictarr/pull-bitflipper) in TypeScript.

# pull-bitflipper

pull stream that randomly flips bits in input stream,
useful for testing authenticated cryptography.

## Example

``` js
import bitFlipper from '@jacobbubu/pull-bitflipper'

pull(
  // Create a source that calls a callback when it gets aborted.
  source(function onAbort(err) {
    // This should be called when the output fails because a bit was filpped.
  }),

  createEncryptStream(),

  // Pass in the probability that a particular message should
  // Contain a flipped bit.
  bitFlipper(prop = 0.1),

  createDecryptStream(),

  sink(function (err) {
    // The sink should error when the decryption stream
    // finds a packet that does not authenticate.
  })
)

```
