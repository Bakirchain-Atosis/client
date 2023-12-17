<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="shadow-xl p-2 shadow-slate-500 border-black flex flex-col items-center justify-center gap-3"
      style="width: 540px"
    >
      <div>
        <img src="../assets/identity-logo.png" alt="" />
      </div>
      <h1>Vasiyet olustur</h1>
      <div class="w-full">
        <label class="form-control w-full max-w-sm mx-auto">
          <div class="label">
            <span class="label-text">Açık Anahtar</span>
          </div>
          <input
            v-model="acikAnahtar"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div class="w-full">
        <label class="form-control w-full max-w-sm mx-auto">
          <div class="label">
            <span class="label-text">Açık Anahtar (Memur)</span>
          </div>
          <input
            v-model="acikAnahtarMemur"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div class="w-full">
        <div
          class="border border-dashed flex justify-center max-w-sm mx-auto items-center"
          style="height: 200px"
        >
          <label class="form-control w-full mx-auto">
            <input
              ref="meta"
              type="file"
              class="file-input file-input-bordered w-full max-w-xs mx-auto"
            />
          </label>
        </div>
      </div>
      <div class="w-full">
        <label class="form-control w-full max-w-sm mx-auto">
          <div class="label">
            <span class="label-text">Erişim Yetkisi Verilen Adresler</span>
          </div>
          <input
            v-model="erisimYetkisiVerilenAdresler"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div>
        <button @click="start" class="btn btn-primary btn-wide">Oluştur</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { makeRandomString } from "../utils/randomString";
import { AES } from "crypto-js";
import { ec } from "elliptic";
import { EthersAdapter } from "../api/ethers";
import { ArweaveApi } from "../api/arweave";

const acikAnahtar = ref("");
const acikAnahtarMemur = ref("");
const erisimYetkisiVerilenAdresler = ref("");

const meta = ref<HTMLInputElement | null>(null);

const start = async () => {
  const buffer = await convertToBuffer((meta.value as any).files[0]);
  const base64meta = convertBufferToBase64(buffer);
  const { encrypted, key } = encryptWithAes(base64meta);
  const sharedKey = generateSharedKey();
  const encryptedSymetricKey = encryptWithAesWkey(key, sharedKey);
  const arweave = new ArweaveApi();
  const txid = await arweave.sendFileTransaction(encrypted);
  const ethers = new EthersAdapter();
  const keys = await ethers.newStorageTransaction(
    txid as string,
    erisimYetkisiVerilenAdresler.value.split(","),
    [acikAnahtarMemur.value, acikAnahtar.value],
    encryptedSymetricKey
  );
  alert("Vasiyet oluşturuldu");
};

const convertToBuffer = async (file: any) => {
  const buffer = await file.arrayBuffer();
  return buffer;
};

const convertBufferToBase64 = (buffer: ArrayBuffer) => {
  const base64 = Buffer.from(buffer).toString("base64");
  return base64;
};

const encryptWithAes = (meta: string) => {
  const key = makeRandomString(32);
  const iv = makeRandomString(16);
  const encrypted = AES.encrypt(meta, key).toString();
  return { key, encrypted };
};

const encryptWithAesWkey = (meta: string, key: string) => {
  const encrypted = AES.encrypt(meta, key).toString();
  return encrypted;
};

const generateSharedKey = () => {
  const e = new ec("secp256k1");
  const memurKeyPair = e.keyFromPrivate(
    "dad1c8188b81a1deea496b80964614add9ccf69e1c26b41409011c269637bf3c"
  );
  const vatandasAcikAnahtar = e.keyFromPrivate(
    "0cc27c97eab2dc9ffa7a0220e7d1d53ee5d9cd6250b208a71f946c34ded5f1aa"
  );
  const sharedKey = memurKeyPair
    .derive(vatandasAcikAnahtar.getPublic())
    .toString(16);
  return sharedKey;
};
</script>

<style scoped></style>
