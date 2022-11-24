<template>
  <div class="container">
    <div class="checkboxContainer">
      <input
        type="checkbox"
        name="sameAddress"
        v-model="isSameAddress"
        @change="fillForm()"
      />
      <label for="sameAddress"
        >Utiliser la même adresse que pour la livraison</label
      >
    </div>
    <form id="form" @submit.prevent="submitForm">
      <div v-if="!isSameAddress">
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
      </div>

      <button :disabled="$v.$invalid" type="submit" class="mainButton">Valider</button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    deliveryForm: null,
    billingForm: null,
  },

  data() {
    return {
      isSameAddress: null,
      form: {
        firstname: null,
        lastname: null,
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
      phoneNumber: {
        required,
      },
    },
  },

  mounted() {
    this.billingForm
      ? (this.isSameAddress = this.billingForm.isSameAddress)
      : (this.isSameAddress = true);
    this.fillForm();
  },

  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        const form = { ...this.form, isSameAddress: this.isSameAddress };
        this.$emit("submitted", form);
      }
    },

    fillForm() {
      if (this.billingForm == null) {
        if (this.isSameAddress) {
          this.form.firstname = this.deliveryForm.firstname;
          this.form.lastname = this.deliveryForm.lastname;
          this.form.phoneNumber = this.deliveryForm.phoneNumber;
          this.form.address = this.deliveryForm.address;
          this.form.city = this.deliveryForm.city;
          this.form.postalCode = this.deliveryForm.postalCode;
        } else {
          this.form.firstname = null;
          this.form.lastname = null;
          this.form.phoneNumber = null;
          this.form.address = null;
          this.form.city = null;
          this.form.postalCode = null;
        }
      } else {
        if (this.isSameAddress) {
          this.form.firstname = this.deliveryForm.firstname;
          this.form.lastname = this.deliveryForm.lastname;
          this.form.phoneNumber = this.deliveryForm.phoneNumber;
          this.form.address = this.deliveryForm.address;
          this.form.city = this.deliveryForm.city;
          this.form.postalCode = this.deliveryForm.postalCode;
        } else {
          this.form.firstname = this.billingForm.firstname;
          this.form.lastname = this.billingForm.lastname;
          this.form.phoneNumber = this.billingForm.phoneNumber;
          this.form.address = this.billingForm.address;
          this.form.city = this.billingForm.city;
          this.form.postalCode = this.billingForm.postalCode;
        }
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
}
</style>