## Boomerang Contracts

### Testing
First you will need to install [Truffle](https://truffleframework.com/docs/truffle/getting-started/installation) and [Ganache](https://truffleframework.com/docs/ganache/quickstart).

Install all needed node packages by running `npm i`

Next you will need to modify the *.env* file with your own credentials consisting of three things:
1. Private Key of an Ethereum Wallet
2. Public Key of an Ethereum Wallet
3. [An Access Token from Infura](https://infura.io/)


Open a new tab in terminal and run the command:
```ganache-cli -l 8000000 --account="0x84a117227be70d45281f512e8ada0d6ea17e8ab5e1a744ca275aa08403f0ebd3,100000000000000000000000000000" --account="0x302e3921753d484a5358f41bb360c42ddf81cac170279024226cc803a270e6f5,100000000000000000000000000000" --account="0x28332348bf30d514af3e7fd48534b4fe9bcfe56fd42ddba1b5ab73e2e5a0b49c,100000000000000000000000000000" --account="0x2413fffb1c65c4da92322c52e1b609c2f69b19e14cb178ec06d8ee63dc622f73,100000000000000000000000000000" --account="0x4785ae7c653f1e572822f7bc41ee501d2ba739836223a3260555d73acf6c76f5,100000000000000000000000000000" --account="0x7388f666795bc8a4cdde31923f46fa0389afb686331a5575fb13642545a8054b,100000000000000000000000000000" --account="0xcd705aa706bc61f6e5c6fe19777c5296a8e8489222ff81e0f83dfa07ed5c6649,100000000000000000000000000000" --account="0x646576fc71d99bf32527a4365b94d30d743a5b9e0d39a4df0347ac7a456c5db3,100000000000000000000000000000" --account="0x7ed0a695d97a8eae39ee968c8a5cbdfec8dac988dbcc9d4ac9b9ee326d81e0b8,100000000000000000000000000000" --account="0xa1d90da9f85a8369c4dcc93bc9eabe6dd12b4ddcdb3a0443504c6758260883f3,100000000000000000000000000000"```

This will start up a local blockchain to test upon.

Switch back to the original terminal tab and run `npm run test`




