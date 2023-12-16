import { ABI } from "@/constants/abi";
import { Contract } from "ethers";
import { ethers } from "ethers";

export class EthersAdapter {
  private contractAddress = "0xefb6a5690b17533df6d63731c5496375ef719599";
  private rpcProvider = new ethers.JsonRpcProvider(
    "https://api.avax-test.network/ext/bc/C/rpc",
    { chainId: 43113, name: "Avalanche Fuji Testnet" }
  );
  private contract: ethers.Contract = new Contract(
    this.contractAddress,
    ABI,
    this.rpcProvider
  );
  async getWalletAccount() {
    const providers = new ethers.BrowserProvider((window as any).ethereum);
    const account = await providers.send("eth_requestAccounts", []);
    return account[0];
  }

  async getOwner() {
    const result = await this.rpcProvider.getBlockNumber();
    console.log("Block number: " + result);
    const owner = await this.contract.getOwner();
    return owner;
  }
}
