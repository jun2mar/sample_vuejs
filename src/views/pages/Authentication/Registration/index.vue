<template>
  <v-row align="center" justify="center" style="height: 100vh;">
    <v-col cols="12" sm="6" lg="3">
      <v-card>
        <v-card-title class="headline">Register</v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="form.name" :error-messages="formerror['name']" label="Name"></v-text-field>
            <v-text-field v-model="form.email" :error-messages="formerror['email']" label="Email"></v-text-field>
            <v-text-field v-model="form.password" :error-messages="formerror['password']" label="Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" color="primary" :to="{name: 'login'}">Login</v-btn>
          <v-btn variant="tonal" @click="store" color="success" :loading="isSubmit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
    import index from './index.js';
    export default index;
</script>