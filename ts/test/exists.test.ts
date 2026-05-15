
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MakeupSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MakeupSDK.test()
    equal(null !== testsdk, true)
  })

})
