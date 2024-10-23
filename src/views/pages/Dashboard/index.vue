<template>
  <v-row v-if="data" align="center" justify="center" style="height: 100vh;">
    <v-col cols="12" sm="6" lg="3">
      <v-card>
        <v-card-title class="headline">Successfully Logged In</v-card-title>
        <v-card-text>
          <h2>Name: {{ data.name }}</h2>
          <p>Email: {{ data.email }}</p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn variant="tonal" color="primary" :to="{name: 'registration'}">Register</v-btn>  -->
          <v-btn variant="tonal" @click="logout" color="error">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
    import index from './index.js';
    export default index;
</script>