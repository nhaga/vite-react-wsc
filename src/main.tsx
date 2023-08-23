import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectWSCProvider,
  getDefaultConfig,
  MilkomedaNetworkName,
} from "milkomeda-wsc-ui-test-beta";


const client = createClient(
  getDefaultConfig({
    oracleUrl: "https://wsc-server-devnet.c1.milkomeda.com",
    blockfrostId: "preprodliMqEQ9cvQgAFuV7b6dhA4lkjTX1eBLb",
    network: MilkomedaNetworkName.C1Devnet,
    cardanoWalletNames: ["flint"], // , "eternl", "nami", "nufi", "yoroi"
  })
);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
        <ConnectWSCProvider>
          <App />
      </ConnectWSCProvider>    
    </WagmiConfig>
  </React.StrictMode>,
)
