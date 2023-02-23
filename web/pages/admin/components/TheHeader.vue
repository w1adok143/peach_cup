<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__nav">
        <Menubar :model="store.menu">
        </Menubar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Menubar from 'primevue/menubar';
  import { useAlertsStore } from "~/pages/admin/store";
  const store = useAlertsStore();
  useAsyncData(() => store.fetchMenu())
</script>