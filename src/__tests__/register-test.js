import resolve from 'did-resolver'
import register from '../register'

describe('secp256k1Resolver', () => {
  register()
  describe('resolve', () => {
    describe('valid DID docs', () => {
      const publicKey = '03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479'
      const did = `did:secp256k1:${publicKey}`
      const didDoc = {
        '@context': 'https://w3id.org/did/v1',
        id: did,
        publicKey: [{
          id: `${did}#keys-1`,
          type: 'Secp256k1VerificationKey2018',
          owner: did,
          publicKeyHex: publicKey
        }]
      }

      it('resolves document', async () => {
        expect(resolve(did)).resolves.toEqual(didDoc)
      })
    })

    describe('error handling', () => {
      it('rejects promise', async () => {
        expect(resolve('did:secp256k1:2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX')).rejects.toEqual(new Error('Not a valid secp256k1 DID: did:secp256k1:2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX'))
      })
    })
  })
})
