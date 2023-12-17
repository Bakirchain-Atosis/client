import { ABI } from "@/constants/abi";
import { Contract } from "ethers";
import { ethers } from "ethers";

export class EthersAdapter {
  private contractAddress = "0x2af17ebe82b645a3df7f5c11342f0bba7ac11da3";
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
    const owner = await this.contract.getOwner();
    return owner;
  }

  async getUserPublicKey(userAddr: string) {
    const publicKey = await this.contract.getPublicKey(userAddr);
    return publicKey;
  }

  async createNewIdentity(storageHash: string, address: string) {
    const providers = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await providers.getSigner(await this.getWalletAccount());
    const administrativeSidechainContract = new ethers.Contract(
      this.contractAddress,
      ABI,
      signer
    );
    const result = await administrativeSidechainContract.createIdentity(
      storageHash,
      address
    );
    await providers.waitForTransaction(result.hash);
    return result;
  }

  async newStorageTransaction(
    storageHash: string,
    permissionedAddresses: string[],
    keys: string[],
    symetricKey: string
  ) {
    const providers = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await providers.getSigner(await this.getWalletAccount());
    const administrativeSidechainContract = new ethers.Contract(
      this.contractAddress,
      ABI,
      signer
    );
    const result = await administrativeSidechainContract.newStorageTransaction(
      storageHash,
      permissionedAddresses,
      keys,
      symetricKey
    );
    await providers.waitForTransaction(result.hash);
    return result;
  }
}
