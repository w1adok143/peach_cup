<template>
  <div class="card">
    <div>
      <InputText placeholder="Vote" @input="onInput"/>
      <SplitButton label="Пошук" :model="items"></SplitButton>
    </div>

    <div>
      <DataTable
        dataKey="id"
        ref="dt"

        :value="customers"
        v-model:selection="selected"
        selectionMode="single"
        :lazy="true"
        :loading="false"
        :resizableColumns="true" columnResizeMode="fit" stripedRows showGridlines

        :paginator="true"
        :rows="rows"
        :totalRecords="total"

        @page="onPage"
        @sort="onSort"
        >
        <Column
            v-for="column in columns"
            :field="column.field"
            :header="column.label"
            :ref="column.field"
            :sortable="column.sortable"
            >
          <template #filter>
            <InputText autofocus :value="column.field"/>
          </template>
        </Column>

        <Column headerStyle="width: 10rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
          <template #body>
            <div class="flex">
            <Button type="button" icon="pi pi-cog" class="mr-1"></Button>
            <Button type="button" icon="pi pi-times" class="p-button-danger" @click="onEdit"></Button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div>
      <Dialog header="Додати товар" v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
        <component :is="props.dialog"></component>
      </Dialog>
    </div>

    {{ selected }}
  </div>
</template>

<script setup lang="ts">
  import DataTable from 'primevue/datatable';
  import Dialog from 'primevue/dialog';
  import Dropdown from 'primevue/dropdown';
  import Column from 'primevue/column';
  import SplitButton from 'primevue/splitbutton';
  import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
  import Row from 'primevue/row';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';

  const display = ref(false);

  function onEdit() {
    display.value = true;
  }

  const props = defineProps({
    columns: {
      type: Array<{field: string, label: string, sortable: boolean}>
    },
    dialog: {
      type: Object
    }
  });

  const items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
    },
    {
      label: 'Vue Website',
      icon: 'pi pi-external-link',
    },
    {
      label: 'Upload',
      icon: 'pi pi-upload',
    }
  ]

  const selectedCity = ref(null);
  const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  const selected = ref(null);

  const customers = ref([] as Array<{
    id: number,
    label: string,
    category: string,
    price: number,
    price_down: number,
    price_up: number
  }>);

  const buttons = [
    { label: ''}
  ];

  const total = ref(0);
  const rows = 6;
  const config = reactive({
    loading: false,
    totalRecords: 0,
    customers: null,
    selectedCustomers: null,
    selectAll: false,
    filters: {
      'name': {value: '', matchMode: 'contains'},
      'country.name': {value: '', matchMode: 'contains'},
      'company': {value: '', matchMode: 'contains'},
      'representative.name': {value: '', matchMode: 'contains'},
    },
    lazyParams: {},
    columns: [
      {field: 'name', header: 'Name'},
      {field: 'country.name', header: 'Country'},
      {field: 'company', header: 'Company'},
      {field: 'representative.name', header: 'Representative'}
    ]
  })

  onMounted(() => {
    config.loading = true;
    config.lazyParams = {
      first: 0,
     rows: [],//this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      filters: config.filters
    };

    loadLazyData();
  });

  function onSearch() {
    console.log('search')
  }

  function onInput(e: any) {
    console.log(e.target.value)
  }

  async function loadLazyData() {
    config.loading = true;

    const { success, data } = await $fetch('/api/admin/menu/items', { method: 'get' });

    if (success) {
      customers.value = data.rows;
      total.value = data.total;
    }
    // setTimeout(() => {
    //   this.customerService.getCustomers(
    //       {lazyEvent: JSON.stringify( this.lazyParams )})
    //       .then(data => {
    //             this.customers = data.customers;
    //             this.totalRecords = data.totalRecords;
    //             this.loading = false;
    //           }
    //       );
    // }, Math.random() * 1000 + 250);
  }

  function onPage(event: any) {
    config.lazyParams = event;
    loadLazyData();
  }

  function onSort(event: any) {
    config.lazyParams = event;
    loadLazyData();
  }

  function onFilter(event: any) {
    console.log(1);
    //config.lazyParams.filters = config.filters;
    loadLazyData();
  }

  function onRowSelect() {
    //config.selectAll = config.selectedCustomers.length === config.totalRecords
  }

  function onRowUnselect() {
    config.selectAll = false;
  }
</script>

<style  lang="postcss">
.p-datatable .p-datatable-tbody > tr > td {
    //padding: 0.3rem 0.3rem;
  }
</style>