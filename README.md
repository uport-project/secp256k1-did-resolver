# secp256k1 DID Resolver

This library is intended to use secp256k1 public keys as [Decentralized Identifiers](https://w3c-ccg.github.io/did-spec/#decentralized-identifiers-dids) and wrap them in a [DID Dcument](https://w3c-ccg.github.io/did-spec/#did-documents)

It supports the proposed [Decentralized Identifiers](https://w3c-ccg.github.io/did-spec/) spec from the [W3C Credentials Community Group](https://w3c-ccg.github.io).

It requires the `did-resolver` library, which is the primary interface for resolving DIDs.

## DID method

To encode a DID for a secp256k1 public key, simply prepend `did:secp256k1:`

eg:

`did:secp256k1:03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479`

Both compressed or uncompressed public keys are supported but compressed ones are much shorter.

## Resolving a DID document

The resolver presents a simple `resolver()` function that returns a ES6 Promise returning the DID document.

```js
import resolve from 'did-resolver'
import registerResolver from 'secp256k1-did-resolver'

registerResolver()

resolve('did:secp256k1:03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479').then(doc => console.log)

// You can also use ES7 async/await syntax
const doc = await resolve('did:secp256k1:03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479')
```

