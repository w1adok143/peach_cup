<template>
  <div class="sign-in">
    <div class="sign-in__container flex justify-content-center">
      <div class="sign-in__body w-2">
        <!-- title -->
        <div class="sign-in__title text-center">Авторизація</div>
        <!-- form -->
        <div class="sign-in__form">
          <div class="form__email field mb-3">
            <label for="email">E-mail</label>
            <InputText v-model="form.email" id="email" type="text" class="w-full" placeholder="E-mail" autocomplete="off"/>
          </div>

          <div class="form__phone field mb-3">
            <label for="phone">Номер телефону</label>
            <InputMask v-model="form.phone" id="phone" mask="+38 (999) 999 99 99" class="w-full" placeholder="Номер телефону" autocomplete="off"/>
          </div>

          <div class="form__name field mb-3">
            <label for="name">Назва закладу</label>
            <InputText v-model="form.name" id="name" type="text" class="w-full" placeholder="Назва закладу" autocomplete="off"/>
          </div>

          <div class="form__password field mb-3">
            <label for="password">Пароль</label>
            <Password v-model="form.password" inputId="password" :feedback="false" toggleMask placeholder="Пароль" inputClass="w-full" autocomplete="off"/>
          </div>
          
          <div class="form__sign-in-button mb-3">
            <Button label="Увійти" class="p-button-raised p-button-help w-full" @click="signIn"/>
          </div>

          <div class="form__forgot-button">
            <a href="#">Нагадати пароль</a>
          </div>
        </div>
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

  function signIn() {
    console.log(form);
  }
</script>

<style scoped lang="postcss">
  .p-password {
    width: 100%;
  }
</style>