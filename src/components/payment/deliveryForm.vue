<template>
  <div class="container">
    <div class="checkboxContainer">
      <p>
        SUN Jewelry vous propose la possibilité de récupérer votre commande
        directement de main en main à Lyon.<br />
        Une adresse de livraison vous sera tout de même demandé, au cas ou.
      </p>
      <div>
        <input type="checkbox" name="homeDelivery" v-model="handPickup" />
        <label for="homeDelivery"
          >Je souhaite récupérer ma commande directement à Lyon</label
        >
      </div>
      <div>
        <input type="checkbox" name="followup" v-model="followupChoice" />
        <label for="followup"
          >Je souhaite recevoir des informations et des photos sur l'avancé de
          ma commande.</label
        >
      </div>
    </div>
    <form id="form" @submit.prevent="submitForm">
      <div class="formItem">
        <span>Prénom</span>
        <input v-model="$v.form.firstname.$model" type="text" />
        <p
          v-if="$v.form.firstname.$invalid && $v.form.firstname.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Nom</span>
        <input v-model="$v.form.lastname.$model" type="text" />
        <p
          v-if="$v.form.lastname.$invalid && $v.form.lastname.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Email</span>
        <input v-model="$v.form.email.$model" type="text" />
        <p v-if="$v.form.email.$invalid && $v.form.email.$dirty" class="error">
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Numéro de téléphone</span>
        <input v-model="$v.form.phoneNumber.$model" type="text" />
        <p
          v-if="$v.form.phoneNumber.$invalid && $v.form.phoneNumber.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Adresse</span>
        <input v-model="$v.form.address.$model" type="text" />
        <p
          v-if="$v.form.address.$invalid && $v.form.address.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Ville</span>
        <input v-model="$v.form.city.$model" type="text" />
        <p v-if="$v.form.city.$invalid && $v.form.city.$dirty" class="error">
          Champ invalide
        </p>
      </div>
      <div class="formItem">
        <span>Code postal</span>
        <input v-model="$v.form.postalCode.$model" type="text" />
        <p
          v-if="$v.form.postalCode.$invalid && $v.form.postalCode.$dirty"
          class="error"
        >
          Champ invalide
        </p>
      </div>
      <button :disabled="$v.$invalid" type="submit" class="mainButton">Valider</button>
    </form>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  props: {
    deliveryForm: null,
  },
  data() {
    return {
      handPickup: false,
      followupChoice: false,
      form: {
        firstname: null,
        lastname: null,
        email: null,
        phoneNumber: null,
        address: null,
        city: null,
        postalCode: null,
      },
    };
  },

  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      address: {
        required,
      },
      city: {
        required,
      },
      postalCode: {
        required,
      },
      email: {
        required,
        email,
      },
      phoneNumber: {
        required,
      },
    },
  },

  mounted() {
    if (this.deliveryForm) {
      this.form = this.deliveryForm;
      this.handPickup = this.deliveryForm.handPickup;
    }
  },

  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        const form = {
          ...this.form,
          handPickup: this.handPickup,
          followupChoice: this.followupChoice,
        };

        this.$emit("submitted", form);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/shared/styles/form.scss";

.checkboxContainer {
  width: 66%;
  margin: 5% auto;
  text-align: center;

  & > * {
    margin: 16px 0;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
  }
}
</style>