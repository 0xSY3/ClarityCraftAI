ClarityCraft Overview
ClarityCraft introduces an innovative toolkit harnessing OpenAI's capabilities to streamline blockchain development. Tailored for developers working with Solidity and Clarity (Stacks), ClarityCraft simplifies the conversion between Solidity and Clarity code, easing deployment across respective platforms. Beyond conversion, our tool integrates an AI-driven audit function for Clarity code, ensuring the solidity and security of smart contract deployments. Moreover, ClarityCraft simplifies Clarity code complexities through its AI-driven explanation module, enhancing accessibility for developers of all expertise levels. Overall, ClarityCraft offers a comprehensive solution for enhancing efficiency, security, and comprehension in blockchain development.

Running ClarityCraft
Navigate to the backend folder.
Start the backend by running npm run start.
Open a separate terminal.
Navigate back to the main folder.
Run npm start in the main folder.
Technical Overview
Named ClarityCraft, the project acts as a bridge between developers and the Stacks blockchain, enabling analysis, language conversion, deployment, and auditing of smart contracts. It offers a user-friendly interface for inputting smart contract addresses and performing various operations, such as code breakdown, conversion between Clarity (Stacks) and Solidity (Ethereum), deployment to respective chains, and auditing Clarity contracts.

How It Works
AI-driven Smart Contract Explanations

Users input a Clarity smart contract address deployed to the Stacks blockchain.
This triggers ClarityCraft's endpoint, POST /ClarityCraft, with the contract address in the request body.
The Hiro API is queried to retrieve the Clarity smart contract code associated with the provided address.
A detailed prompt is constructed with the contract code to explain its functionality and interaction methods.
Using the GPT-4 model, the prompt is sent to OpenAI's API.
The response, containing the contract explanation, is displayed alongside the smart contract code in the UI.
Conversion and Deployment from Solidity to Clarity

Users input the address of a Solidity smart contract deployed to ETH Sepolia.
This triggers another endpoint, POST /convertToClarity, with the contract address in the request body.
The ETH Sepolia API is queried to retrieve the Solidity smart contract source code.
A prompt is generated to convert the Solidity code to Clarity, considering functional differences.
The prompt is sent to OpenAI's API using the GPT-4 model.
The response, containing the converted Clarity code and an explanation, is displayed alongside the Solidity code in the UI. Additionally, a deploy button initiates the deployment process to the Stacks testnet.
Conversion and Deployment from Clarity to Solidity

Users input the address of a Clarity smart contract deployed to the Stacks blockchain.
This triggers another endpoint, POST /convertToSolidity, with the contract address in the request body.
The Hiro API is queried to retrieve the Clarity smart contract code.
A prompt is generated to convert the Clarity code to Solidity, considering functional differences.
The prompt is sent to OpenAI's API using the GPT-4 model.
The response, containing the converted Solidity code and an explanation, is displayed alongside the Clarity code in the UI. Additionally, a deploy button prompts the user to connect their Metamask wallet and initiates the deployment process to ETH Sepolia.
AI-powered Clarity Smart Contract Auditing

Users input their Clarity smart contract code into the UI and click the 'Audit' button.
This sends a POST request to the ClarityCraft endpoint /getAuditReport with the smart contract code.
A prompt is constructed to generate a comprehensive audit report.
The prompt is sent to OpenAI's API using the GPT-4 model.
The audit report response is displayed alongside the code in the UI. Additionally, a 'download PDF' button allows users to download the audit report for sharing purposes. It's important to note that while GPT-4 provides thorough auditing, additional testing and auditing methods are recommended.




