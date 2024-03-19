#ClarityCraft: Streamlined Stacks Smart Contract Deployment

Develop smart contracts in any programming language and effortlessly deploy them to the Stacks blockchain.


## Overview

ClarityCraft is a tool tailored to streamline the deployment of Clarity smart contracts onto the Stacks blockchain. It's particularly beneficial for developers familiar with languages like Solidity or those new to the Stacks ecosystem. By facilitating code conversion and bridging knowledge gaps, this tool enhances the onboarding experience for Stacks smart contract developers.

## Features

- **Code Conversion**: Seamlessly convert and adapt smart contract code with the assistance of our AI chatbot.
- **Deployment Options**: Choose between testnet, mainnet, or devnet for deployment.
- **Sponsored Deployment**: Deploy without requiring a wallet using our sponsored deployment option.

## Functionality

Our chatbot, developed using Next.js, Vercel-AI, OpenAI, Stacks.js, and Clarinet, is finely tuned with SIP-009 smart contract examples. It guides users through writing and converting smart contract code, while the Stacks JS library handles deployment to the selected network.

## Setup & Configuration

To get started, you'll need to create a `.env.local`

```env.local
NEXT_PUBLIC_APP_URL=

# OpenAI API Key
OPENAI_API_KEY=

# Stacks deployer private key
DEPLOYER_PRIVATE_KEY=
```

## Challenges & Learnings

- Block Times: Lengthy block times on testnet presented a challenge. We recommend setting up a devnet for a more efficient experience.
- Best Practices: Incorporating SIP-009 examples from popular NFT contracts on Stacks Mainnet ensured adherence to up-to-date practices.

## Technologies Used

Clarity
Next.js
OpenAI
React
Stacks
Stacks.js
