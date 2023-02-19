<template>
  <div class="sign-up">
    <div class="sign-up__container flex justify-content-center align-items-center h-screen">
      <div class="sign-up__body w-2">
        <div class="sign-up__title text-center">Реєстрація</div>
        <form class="sign-up__form form">
          <div class="form__field field mb-3">
            <label for="email" class="field__label">E-mail</label>
            <InputText v-model="form.email" id="email" type="text" class="w-full" placeholder="E-mail" autocomplete="off"/>
          </div>
          <div class="form__field field mb-3">
            <label for="phone" class="field__label">Номер телефону</label>
            <InputMask v-model="form.phone" id="phone" mask="+38 (999) 999 99 99" class="w-full" placeholder="Номер телефону" autocomplete="off"/>
          </div>
          <div class="form__field field mb-3">
            <label for="name" class="field__label">Назва закладу</label>
            <InputText v-model="form.name" id="name" type="text" class="w-full" placeholder="Назва закладу" autocomplete="off"/>
          </div>
          <div class="form__field field mb-3">
            <label for="password" class="field__label">Пароль</label>
            <Password v-model="form.password" inputId="password" :feedback="false" toggleMask placeholder="Пароль" inputClass="w-full" autocomplete="off"/>
          </div>
          <div class="form__button mb-3">
            <Button label="Реєстрація" class="p-button-raised p-button-help w-full" @click="signUp"/>
          </div>
          <div class="form__button">
            <span class="form__span">Вже зареєстровані? <NuxtLink to="/admin/signIn">Увійти</NuxtLink></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import InputText from 'primevue/inputtext';
  import InputMask from 'primevue/inputmask';
  import Password from 'primevue/password';
  import Button from 'primevue/button';

  const form = reactive({
    email: '',
    phone: '',
    name: '',
    password: ''
  });

  function signUp() {
    console.log(form);
  }
</script>

<style scoped lang="postcss">
  .p-password {
    width: 100%;
  }
</style>