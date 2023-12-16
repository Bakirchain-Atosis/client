<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { FilePdf } from "@vicons/fa";
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
  <div>
    <div class="bg-fixed arkaplan w-full" style="height: 500px">
      <div class="flex justify-center items-center w-full h-full">
        <div class="text-center w-2/4 pb-10">
          <h1 class="text-blue-900 font-bold text-5xl mb-3">Atomik</h1>
          <p class="text-blue-900 mb-4">
            Lorem ipsum dolor sit amet consectetur. Id sagittis tristique ac
            maecenas commodo. Elit fringilla cursus id commodo nulla quis
            tempor.
          </p>
          <button class="btn btn-info">Daha Fazla Bilgi</button>
        </div>
      </div>
      <div class="w-full absolute -bottom-20">
        <div class="flex justify-center gap-6">
          <div class="text-center">
            <div
              class="w-20 h-20 bg-info rounded-full border-4 border-white flex justify-center items-center mx-auto"
              style="background: #c7d2fe"
            >
              <Icon size="30">
                <FilePdf />
              </Icon>
            </div>
            <p class="break-words font-bold my-1">Lorem, ipsum dolor.</p>
            <p class="break-words text-xs">Lorem, ipsum dolor.</p>
          </div>
          <div class="text-center">
            <div
              class="w-20 h-20 bg-info rounded-full border-4 border-white flex justify-center items-center mx-auto"
              style="background: #c7d2fe"
            >
              <Icon size="30">
                <FilePdf />
              </Icon>
            </div>
            <p class="break-words font-bold my-1">Lorem, ipsum dolor.</p>
            <p class="break-words text-xs">Lorem, ipsum dolor.</p>
          </div>
          <div class="text-center">
            <div
              class="w-20 h-20 bg-info rounded-full border-4 border-white flex justify-center items-center mx-auto"
              style="background: #c7d2fe"
            >
              <Icon size="30">
                <FilePdf />
              </Icon>
            </div>
            <p class="break-words font-bold my-1">Lorem, ipsum dolor.</p>
            <p class="break-words text-xs">Lorem, ipsum dolor.</p>
          </div>
          <div class="text-center">
            <div
              class="w-20 h-20 bg-info rounded-full border-4 border-white flex justify-center items-center mx-auto"
              style="background: #c7d2fe"
            >
              <Icon size="30">
                <FilePdf />
              </Icon>
            </div>
            <p class="break-words font-bold my-1">Lorem, ipsum dolor.</p>
            <p class="break-words text-xs">Lorem, ipsum dolor.</p>
          </div>
          <div class="text-center">
            <div
              class="w-20 h-20 bg-info rounded-full border-4 border-white flex justify-center items-center mx-auto"
              style="background: #c7d2fe"
            >
              <Icon size="30">
                <FilePdf />
              </Icon>
            </div>
            <p class="break-words font-bold my-1">Lorem, ipsum dolor.</p>
            <p class="break-words text-xs">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-40"
      style="background: #c7d2fe; margin-top: 120px"
    ></div>
  </div>
</template>

<style scoped>
.arkaplan {
  background: url("../assets/bg.png") no-repeat top center fixed;
  background-size: 100% 100%;
  position: relative;
}
</style>
