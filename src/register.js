import { registerMethod } from 'did-resolver'

export function wrapDidDocument (did, publicKey) {
  return {
    '@context': 'https://w3id.org/did/v1',
    id: did,
    publicKey: [{
      id: `${did}#keys-1`,
      type: 'Secp256k1SignatureVerificationKey2018',
      owner: did,
      publicKeyHex: publicKey
    }]
  }
}

function register () {
  function resolve (did, parsed) {
    return new Promise((resolve, reject) => {
      if (!parsed.id.match(/^([02|03|04])[0-9a-fA-F]+$/)) reject(new Error(`Not a valid secp256k1 DID: ${did}`))
      resolve(wrapDidDocument(did, parsed.id))
    })
  }

  registerMethod('secp256k1', resolve)
}

module.exports = register
