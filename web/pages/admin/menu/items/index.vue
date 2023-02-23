<template>
  <div class="menu-items">
    <div class="menu-items__container container">
      <div class="menu-items__body">
        <div class="items__button">
          <Button label="Додати товар" icon="pi pi-external-link" @click="openModal"/>
          <Dialog header="Додати товар" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
            <form class="menu-items-form">
              <div class="form__field field mb-3">
                <label for="add" class="field__label">Назва товару</label>
                <InputText  id="Назва товару" type="text" class="w-full" placeholder="Назва товару" autocomplete="off"/>
              </div>
              <div class="form__field field mb-3">
                <label for="add" class="field__label">Категорія</label>
                <InputText  id="Категорія" type="text" class="w-full" placeholder="Категорія" autocomplete="off"/>
              </div>
              <div class="form__field field mb-3">
                <label for="add" class="field__label">Собівартість</label>
                <InputText  id="Собівартість" type="text" class="w-full" placeholder="Собівартість" autocomplete="off"/>
              </div>
              <div class="form__field field mb-3">
                <label for="add" class="field__label">Націнка %</label>
                <InputText  id="Націнка %" type="text" class="w-full" placeholder="Націнка %" autocomplete="off"/>
              </div>
              <div class="form__field field mb-3">
                <label for="add" class="field__label">Ціна</label>
                <InputText  id="Ціна" type="text" class="w-full" placeholder="Ціна" autocomplete="off"/>
              </div>
            </form>
            <template #footer>
                <Button label="Відмінити" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                <Button label="Додати" icon="pi pi-check" @click="closeModal" autofocus />
            </template>
        </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  import InputText from 'primevue/inputtext';

  definePageMeta({
    layout: 'admin'
  });

  const displayModal = ref(false);

  function openModal() {
    displayModal.value = true;
  }
  function closeModal() {
    displayModal.value = false;
  }
</script>


<style scoped lang="postcss">
.p-button {
    margin: 0.3rem .5rem;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>