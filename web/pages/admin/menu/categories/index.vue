<template>
  <div class="menu-items">
    <div class="menu-items__container container">
      <div class="menu-items__body">
        <div class="items__button">
          <Button label="Додати категорію" icon="pi pi-external-link" @click="openModal"/>
          <Dialog header="Додати категорію" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
            <form class="menu-items-form">
              <div class="form__field field mb-3">
                <label for="add" class="field__label">Назва товару</label>
                <InputText  id="Назва товару" type="text" class="w-full" placeholder="Назва товару" autocomplete="off"/>
              </div>
              <div class="menu-categories__dropdown mb-3">
                <label for="add" class="field__label">Категорія</label>
                <Dropdown id="Категорія" type="text" class="w-full" v-model="selectedCategories" :options="categories" optionLabel="name" autocomplete="off" placeholder="Категорія" />
              </div>
              <div class="menu-categories__dropdown mb-3">
                <label for="add" class="field__label">Налог</label>
                <Dropdown id="Налог" type="text" class="w-full" v-model="selectedTax" :options="tax" optionLabel="name" autocomplete="off" placeholder="Налог" />
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
  import Dropdown from 'primevue/dropdown';

  definePageMeta({
    layout: 'admin'
  });

  const selectedCategories = ref(null);
  const categories = [
    {name: 'Categories1'},
    {name: 'Categories2'},
    {name: 'Categories3'},
    {name: 'Categories4'},
    {name: 'Categories5'}
  ] as Array<{name: string}>;

  const selectedTax = ref(null);
  const tax = [
    {name: 'Tax1'},
    {name: 'Tax2'},
    {name: 'Tax3'},
    {name: 'Tax4'},
    {name: 'Tax5'}
  ] as Array<{name: string}>;

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