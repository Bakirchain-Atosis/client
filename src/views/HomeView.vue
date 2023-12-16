<script setup lang="ts">
import { curve, curves, ec } from "elliptic";
import { EthersAdapter } from "../api/ethers";
import { ArweaveApi } from "../api/arweave";
const a = new ec("secp256k1");
const bobskeys = a.keyFromPrivate(
  "dad1c8188b81a1deea496b80964614add9ccf69e1c26b41409011c269637bf3c"
);

const aliceskeys = a.keyFromPrivate(
  "0cc27c97eab2dc9ffa7a0220e7d1d53ee5d9cd6250b208a71f946c34ded5f1aa"
);

console.log("bob priv key =", bobskeys.getPrivate("hex"));
console.log("alice priv key =", aliceskeys.getPrivate("hex"));

console.log("bob pub key =", bobskeys.getPublic("hex"));
console.log("alice pub key =", aliceskeys.getPublic("hex"));

console.log(
  "bob shared key =",
  bobskeys.derive(aliceskeys.getPublic()).toString(16)
);

const ethers = new EthersAdapter();
const presser = async () => {
  const enc = new TextEncoder();
  const data = enc.encode("hello world");
  const result = await ethers.getOwner();
  console.log(result);
};

console.log(
  "alice shared key =",
  aliceskeys.derive(bobskeys.getPublic()).toString(16)
);

// bob priv key = dad1c8188b81a1deea496b80964614add9ccf69e1c26b41409011c269637bf3c
// alice priv key = 0cc27c97eab2dc9ffa7a0220e7d1d53ee5d9cd6250b208a71f946c34ded5f1aa
</script>

<template>
  <main>
    <div @click="presser">hello</div>
  </main>
</template>
