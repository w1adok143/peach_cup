<template>
  <div class="sign-in">
    <div class="sign-in__container flex justify-content-center align-items-center h-screen">
      <div class="sign-in__body w-2">
        <div class="sign-in__title text-center">Авторизація</div>
        <form class="sign-in__form form">
          <div class="form__field field mb-3">
            <label for="email" class="field__label">E-mail</label>
            <InputText v-model="form.email" id="email" type="text" class="w-full" placeholder="E-mail" autocomplete="off"/>
          </div>
          <div class="form__field field mb-3">
            <label for="password" class="field__label">Пароль</label>
            <Password v-model="form.password" inputId="password" :feedback="false" toggleMask placeholder="Пароль" inputClass="w-full" autocomplete="off"/>
          </div>
          <div class="form__button mb-3">
            <Button label="Увійти" class="p-button-raised p-button-help w-full" @click="signIn"/>
          </div>
          <div class="form__button">
            <a href="#" class="form__link">Нагадати пароль</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import Button from 'primevue/button';

  const form = reactive({
    email: '',
    password: ''
  });

  function signIn() {
    console.log(form);
  }
</script>

<style scoped lang="postcss">
  .p-password {
    width: 100%;
  }
</style>