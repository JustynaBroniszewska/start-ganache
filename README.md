**Start Ganache**

Simple tool for starting own Ethereum network simulator.

```ts
import { startGanache, privateKeys, Multicall } from 'start-ganache'
import { Wallet, constants } from 'ethers'
import { deployContract } from 'ethereum-waffle'


async function main() {
    const port = 8545
    
    const provider = await startGanache(port)

    const wallet = new Wallet(privateKeys[0], provider)
    await wallet.sendTransaction({ to: constants.AddressZero })
    const multicall = await deployContract(wallet, Multicall, [])
}
main()

```