# About ClarityCraft
ClarityCraft represents a pioneering toolkit leveraging OpenAI's capabilities to streamline the process of blockchain development. It presents a range of features specifically designed for developers engaged with Solidity and Clarity (Stacks). At its essence, ClarityCraft facilitates smooth conversion between Solidity and Clarity code, simplifying deployment across their respective platforms. Going beyond mere conversion, our tool incorporates an AI-driven audit function for Clarity code, ensuring the solidity and security of smart contract deployments. Additionally, ClarityCraft simplifies the intricacies of Clarity code through its AI-driven explanation module, enhancing accessibility for developers of all skill levels. In summary, ClarityCraft serves as a comprehensive solution for improving efficiency, security, and comprehension in blockchain development.




# Getting Started with ClarityCraft
## Setting up ClarityCraft
1. Clone repo
```
git clone https://github.com/0xSY3/ClarityCraftAI
```
2. Run `npm install` in main folder
3. Set up .env.local file in main folder with OPENAI key and etherscan key:
```
REACT_APP_OPENAI_API_KEY=XXXXXXXXXXXXXXXX
ETHERSCAN_API_KEY=XXXXXXXXXXXXXXXX
```
4. `cd` into backend and run `npm install`
5. Run `npm install -g nodemon` to install nodemon globally
6. Set up .env file in backend folder with Ethereum priv_key
```
REACT_APP_PRIVATE_KEY=XXXXXXXXXXXXXXXX
```
7. Run `npm run start` in backend folder
8. Start a seperate terminal
9. `cd..` into main folder
10. Run `npm start` in main folder

## Running ClarityCraft
1. `cd` into backend 
2. Run `npm run start` in backend folder
8. Start a seperate terminal
9. `cd..` into main folder
4. Run `npm start` in main folder


# Technical Overview:
The project, named ClarityCraft, serves as a bridge between developers and the Stacks blockchain, allowing for the analysis, programming language conversion and deployment, and auditing of smart contracts. It provides a user-friendly interface for entering a smart contract address, and performing various operations such as breaking down the code, converting between Clarity (Stacks) / Solidity (Ethereum) code and deploying to either chains, and auditing Clarity contracts.

## How does it work?
1. **AI-driven smart contract explanations**
- Users enter an address of a Clarity smart contract deployed to the Stacks blockchain.
- This triggers one of ClarityCraft's endpoints, `POST /ClarityCraft`, which takes the contract address in the request body.
- A request is made to the Hiro API to retrieve the Clarity smart contract code associated with the address provided.
- A prompt is then constructed with the smart contract code to explain in detail what the contract does and how to interact with it.
- This is then passed to openAI's api using the GPT-4 model.
- The response of this query is then passed back to the UI where the code explanation is displayed alongside the smart contract code

2. **(Section 1) Conversion and deployment from Solidity to Clarity**
- Users enter the address of a solidity smart contract address deployed to ETH sepolia.
- This triggers another on of ClarityCraft's endpoints, `POST /convertToClarity`, which takes the contract address in the request body.
- A request is made to the eth sepolia API to retrieve the solidity smart contract source code associated with the address provided.
- A carefully contructed prompt is then generated with the smart contract code in order to convert the solidity code to clarity, and going through the changes made due to differing functionality.
- This is then passed to openAI's api using the GPT-4 model.
- The response of this query is then passed back to the UI where the Solidity code is displayed alongside the converted Clarity code, and a explanation of the conversion and the contract below.
- Significantly, there is also a deploy button, this will run the script deployToStacks.ts in the utils folder. This script takes the clarity smart contract code as input, generates a deployment transaction, and broadcasts the transaction to the Stacks testnet. This is currently done with a prefunded stacks address. The transactionID of the deployment is then returned and displayed on the UI

2. **(Section 2) Conversion and deployment from Clarity to Solidity**
- Users enter the address of a clarity smart contract address deployed to the Stacks blockchain.
- This triggers another on of ClarityCraft's endpoints, `POST /convertToSolidity`, which takes the contract address in the request body.
- A request is made to the Hiro API to retrieve the Clarity smart contract code associated with the address provided.
- A carefully contructed prompt is then generated with the smart contract code in order to convert the clarity code to solidity, and going through the changes made due to differing functionality.
- This is then passed to openAI's api using the GPT-4 model.
- The response of this query is then passed back to the UI where the Clarity code is displayed alongside the converted Solidity code, and a explanation of the conversion and the contract below.
- Again, there is also a deploy button, this will prompt the user to conect their metamask wallet, then the ClarityCraft endpoint `POST /compileContract` will be hit with the solidity code in the request body. This endpoint will compile the solidity code and return the abi and bytecode. From there, within utils scripts in the frontend the smart contract will be deployed to ETH Sepolia and the contract address will be displayed in the UI.

3. **AI-powered clarity smart contract auditing**
- Users enter their Clarity smart contract code into the UI, and hit the 'Audit' button.
- This sends a POST request to the ClarityCraft endpoint `/getAuditReport` which takes the smart contract code in the request body.
- A prompt is then carefully constructed in order to give the most in-depth audit report.
- This is then passed to openAI's api using the GPT-4 model.
- NOTE: GPT-4 does a very good job of auditing clarity code, however it is important to note that this SHOULD NOT be a developers sole testing/auditing technique.
- The audit report response is then return to the UI where it is displayed alongside the code.
- There is also a 'download pdf' button, this downloads the audit report as a pdf for you, useful for sharing the audit report if the code is a collaborative project within a team.


