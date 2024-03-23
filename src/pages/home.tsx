import React, { useState } from "react";
import { Button, Tabs, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { SparklesCore } from "../components/sparkles";

function Home() {
  const navigate = useNavigate();
  const [clarityField, setClarityField] = useState("");

  return (
    <div className="flex flex-col items-center justify-start h-screen text-center bg-black relative">
      {/* Title */}
      <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
        ClarityCraft
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      

      {/* Tabs */}
      <Tabs.Group
        aria-label="Clarify tabs"
        style="underline"
        className="justify-center border-t border-b border-teal-300"
      >
        {/* Clarity Tab */}
        <Tabs.Item active title="Clarity Breakdown">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold mx-auto" style={{ color: 'white' }}>
              Enter your Clarity smart contract address and generate an
              explanation of the smart contract code
            </p>

            {/* Input box */}
            <TextInput
              placeholder="Enter your smart contract address here..."
              className="mt-4 px-4 py-3  rounded placeholder-teal-500 text-lg w-[500px] h-12 resize-y"
              value={clarityField}
              onChange={(e) => setClarityField(e.target.value)}
            ></TextInput>

            {/* Submit button */}
            <Button
              className="font-bold mt-4 px-3 py-1 bg-amber-500 text-white rounded-lg"
              onClick={() => navigate(`/ClarityBreakdown/${clarityField}`)}
            >
              SUBMIT
            </Button>
          </div>
        </Tabs.Item>

        {/* Solidity Tab */}
        <Tabs.Item active title="Clarity to Solidity Converter">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold mx-auto"style={{ color: 'white' }}>
              Enter your Clarity smart contract address and generate an
              equivalent code in Solidity
            </p>
            {/* Input box beneath Clarity Tab */}
            <TextInput
              placeholder="Enter your smart contract address here..."
              className="mt-4 px-4 py-3  rounded placeholder-teal-500 text-lg w-[500px] h-12 resize-y"
              value={clarityField}
              onChange={(e) => setClarityField(e.target.value)}
            ></TextInput>
            {/* Submit button below the input box */}
            <Button
              className="font-bold mt-4 px-3 py-1 bg-amber-500 text-white rounded-lg"
              onClick={() => navigate(`/ClarityConvert/${clarityField}`)}
            >
              SUBMIT
            </Button>
          </div>
        </Tabs.Item>
        <Tabs.Item active title="Solidity to Clarity Converter">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold mx-auto" style={{ color: 'white' }}>
              Enter your Solidity smart contract address and generate an
              equivalent code in Clarity
            </p>
            {/* Input box beneath Clarity Tab */}
            <TextInput
              placeholder="Enter your smart contract address here..."
              className="mt-4 px-4 py-3  rounded placeholder-teal-500 text-lg w-[500px] h-12 resize-y"
              value={clarityField}
              onChange={(e) => setClarityField(e.target.value)}
            ></TextInput>
            {/* Submit button below the input box */}
            <Button
              className="font-bold mt-4 px-3 py-1 bg-amber-500 text-white rounded-lg"
              onClick={() => navigate(`/SolidityConvert/${clarityField}`)}
            >
              SUBMIT
            </Button>
          </div>
        </Tabs.Item>
        <Tabs.Item active title="Clarity Contract Auditing">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold mx-auto" style={{ color: 'white' }}>
              Audit your Clarity contract for security risks, errors, and
              quality.
            </p>
            {/* Input box beneath Clarity Tab */}
            <Button
              className="font-bold mt-4 px-3 py-1 bg-amber-500 text-white rounded-lg"
              onClick={() => navigate(`/ClarityAudit`)}
            >
              GO TO AUDIT
            </Button>
          </div>
        </Tabs.Item>
      </Tabs.Group>
      
    </div>
  );
}

export default Home;
