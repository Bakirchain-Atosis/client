<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="shadow-xl p-2 shadow-slate-500 border-black flex flex-col items-center justify-center gap-3"
      style="width: 540px; height: 510px"
    >
      <div>
        <img src="../assets/identity-logo.png" alt="" />
      </div>
      <h1>kimlik olusturma sistemi</h1>
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
            <span class="label-text">Ad Soyad</span>
          </div>
          <input
            v-model="adSoyad"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div class="w-full">
        <label class="form-control w-full max-w-sm mx-auto">
          <div class="label">
            <span class="label-text">TC Kimlik No</span>
          </div>
          <input
            v-model="tcKimlikNo"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div>
        <button @click="createIdentity" class="btn btn-primary btn-wide">
          Oluştur
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArweaveApi } from "../api/arweave";
import { EthersAdapter } from "../api/ethers";
import { useRouter } from "vue-router";

const router = useRouter();

const adSoyad = ref("");
const tcKimlikNo = ref("");
const acikAnahtar = ref("");

const createIdentity = async () => {
  const arweave = new ArweaveApi();
  const ethers = new EthersAdapter();
  const enc = new TextEncoder();
  const result = await arweave.sendFileTransaction(
    `${adSoyad.value}:${tcKimlikNo.value}`
  );
  const owner = await ethers.getWalletAccount();
  const response = await ethers.createNewIdentity(result as string, owner);
  const awaited = await response.wait();
  console.log("result: ", result);
  console.log("response: ", awaited);
  alert("Kimlik olusturuldu.");
  router.push("/dashboard");
};
</script>

<style scoped></style>
