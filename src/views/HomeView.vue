<script setup lang="ts">
import { curve, curves, ec } from "elliptic";
import TheWelcome from "../components/TheWelcome.vue";
const a = new ec("secp256k1");
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
