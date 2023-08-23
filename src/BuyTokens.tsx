import { useAccount } from "wagmi";
import {
  ConnectWSCButton,
  TransactionConfigWSCProvider,
  useWSCProvider,
} from "milkomeda-wsc-ui-test-beta";
import { ethers } from 'ethers'
import VendingMachineABI from "../abi/m3s6-vending-machine.json";

const TOKEN = "0x5fA38625dbd065B3e336e7ef627B06a8e6090e8F"
const VENDING_MACHINE = "0x5a5697633e93d7C5D319c5362B4A49f87445e33D"



function buyTokens() {
  
  
  
  
  const { address: account } = useAccount();
  const { isWSCConnected } = useWSCProvider();
  
  const wscOptions: TransactionConfigWSCOptions = {
    /* 
    Title of the modal
    */
    titleModal: "Buy m3s6 Token",
    /* 
    We need to specify which token you'll wrap
    */
    defaultWrapToken: {
      unit: "lovelace", 
      amount: "1000",
    },
    /* 
    We need to specify which token you'll unwrap
    */
    defaultUnwrapToken: {
      unit: TOKEN,
      amount: "1000000", // amountUnscaled
    },
    /* 
    EVM Token address that we'll ask for token allowance
    */
    evmTokenAddress: TOKEN,
    /* 
    EVM contract information to execute this action after wrapping
    - the args key can be used to pass function parameters as elements in the array
    - transaction parameters like value, gas, etc, can be passed in the overrides key
    */
    evmContractRequest: {
      address: VENDING_MACHINE,
      abi: VendingMachineABI.abi,
      functionName: "buyTokens",
      args: [account],
      overrides: {
        value: ethers.BigNumber.from("1000000000000000000"),
      },
    },
  }   

  return (
    <TransactionConfigWSCProvider options={wscOptions}>
      <ConnectWSCButton />

      Account: { account }
      </TransactionConfigWSCProvider>
  )
}

export default buyTokens