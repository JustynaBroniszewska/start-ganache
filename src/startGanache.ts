const Ganache = require('ganache-cli')
import { providers } from 'ethers'
import { promisify } from 'util'
import { defaultAccounts } from './defaultAccounts'

type Account = {
  balance: string,
  secretKey: string,
}

type GanacheOptions = {
  accounts?: Account[],
  hardfork?: string,
  gasLimit?: string,
}

export async function startGanache(port: number, ganacheOptions?: GanacheOptions) {
  const options = { accounts: defaultAccounts, hardfork: 'muirGlacier', gasLimit: '10000000' }
  const server = Ganache.server({ ...options, ...ganacheOptions })
  const listenPromise = promisify(server.listen)
  await listenPromise(port)

  const jsonRpcUrl = `http://localhost:${port}`

  console.log(`  Node url (ganache): ${jsonRpcUrl}...`)
  return new providers.Web3Provider(server.provider)
}
