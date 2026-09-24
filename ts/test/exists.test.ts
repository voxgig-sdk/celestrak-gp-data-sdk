
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CelestrakGpDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CelestrakGpDataSDK.test()
    equal(testsdk instanceof CelestrakGpDataSDK, true,
      'CelestrakGpDataSDK.test() must return a client synchronously')
  })

})
