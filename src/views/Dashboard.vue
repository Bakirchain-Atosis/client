<template>
  <div class="w-full h-full flex justify-center items-center gap-8">
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="../assets/card1.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Kimlik Ekle</h2>
        <p>Kimlikleriniz ile cüzdanlarınızı bağlayın.</p>
        <div class="card-actions justify-end">
          <button @click="goIdentityCreate" class="btn btn-primary">
            Kullan
          </button>
        </div>
      </div>
    </div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="../assets/card2.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Vasiyet Belgesi Ekle</h2>
        <p>Solar64 güvencesiyle resmi vasiyetlerinizi depolayın.</p>
        <div class="card-actions justify-end">
          <button @click="goTestamentCreate" class="btn btn-primary">
            Kullan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goIdentityCreate = () => {
  router.push("/create-identity");
};

const goTestamentCreate = () => {
  router.push("/create-testament");
};
</script>

<style scoped></style>
