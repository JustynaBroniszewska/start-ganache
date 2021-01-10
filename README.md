**Start Ganache**

Simple tool for starting own Ethereum network symulator.

```ts
import { startGanache, privateKeys } from 'start-ganache'
import { Wallet, constants } from 'ethers'


async function main() {
    const port = 1845
    
    const provider = await startGanache(port)

    const wallet = new Wallet(privateKeys[0], provider)
    await wallet.sendTransaction({ to: constants.AddressZero })
}

```