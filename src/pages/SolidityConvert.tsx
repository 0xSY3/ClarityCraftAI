import React, { useEffect, useState } from "react";
import { Button, Toast } from "flowbite-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { deployToStacks } from "../utils/deployToStacks";

// TypeScript type assertion
declare global {
  interface Window {
    ethereum: any;
  }
}

function SolidityConvert() {
  let { clarityAddress } = useParams();
  const [codeData, setCodeData] = useState(null);
  const [clarityCode, setClarityCode] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [broadcastSuccess, setBroadcastSuccess] = useState<string | null>(null);

  // Handle Deploy function
  const handleDeploy = async () => {
    if (clarityCode) {
      const res = await deployToStacks(clarityCode);
      setBroadcastSuccess(res);
    } else {
      console.error("clarityCode is null");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        // Make POST request to backend
        const response = await axios.post(
          "http://localhost:3001/convertToClarity",
          {
            contractAddress: clarityAddress,
          }
        );
        // Assume the response data structure is as follows:
        // { sourceCodeData: { source: '...' }, gptResponse: { choices: [{ text: '...' }] } }
        // Update state with data from backend
        setCodeData(response.data.sourceCodeData);
        setClarityCode(response.data.clarityCode);
        setExplanation(response.data.explanation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-black min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-custom text-center mb-8 text-teal-500">
            Solidity Smart Contract Address: {clarityAddress}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ml-5 mr-5">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Solidity Smart Contract Code
              </h2>
              <pre className="overflow-auto">
                {codeData || "Loading code..."}
              </pre>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Clarity Smart Contract Code
              </h2>
              <pre className="overflow-auto">
                {clarityCode || "Loading code..."}
              </pre>
            </div>
          </div>
        </div>
        <div className=" my-4 mx-5">
          <div className="bg-white p-4 rounded shadow-md ">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-4 ">Explanation</h2>
              {broadcastSuccess ? (
                <Toast className="h-16">
                  <div className="ml-3 text-sm font-semibold break-all">
                    Broadcast Transaction ID: {broadcastSuccess}
                  </div>
                  <Toast.Toggle />
                </Toast>
              ) : (
                <></>
              )}
              {clarityCode ? (
                <Button
                  onClick={handleDeploy}
                  className="deploy-button font-bold mt-2 px-6  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded h-[64px]"
                >
                  Deploy Clarity Contract
                </Button>
              ) : (
                <></>
              )}
            </div>
            <p className="break-words whitespace-pre-wrap ">
              {explanation || "Loading explanation..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolidityConvert;
