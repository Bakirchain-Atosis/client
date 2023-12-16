<template>
  <div>
    <div
      class="w-full h-full flex justify-center items-center border-2 mx-auto"
      style="width: 700px"
    >
      <div class="flex p-3 justify-between items-center">
        <img src="../assets/metamask.png" alt="" />
        <div>
          <h1 class="text-lg font-bold pb-2">Metamask Cuzdaninizi Baglayin</h1>
          <p class="text-sm pb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            optio!
          </p>
          <button @click="connectMetamask" class="btn btn-primary">
            Giriş Yap
          </button>
          <p class="text-sm pt-1">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { EthersAdapter } from "../api/ethers";

const router = useRouter();

const connectMetamask = async () => {
  const ethers = new EthersAdapter();
  const accountInfo = await ethers.getWalletAccount();
  alert("Metamask baglantisi basarili.");
  router.push("/dashboard");
};
</script>

<style scoped></style>
