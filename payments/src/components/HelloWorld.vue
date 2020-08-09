<template>
  <div>
    <button @click="startCheckout">Buy</button>
    <button @click="initializePaypal">initiate paypal</button>
    <div id="paypal-button-container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  mounted() {
    alert("hello");
  }
  async startCheckout() {
    const { error } = await store.state.stripe.redirectToCheckout({
      lineItems: [{ price: "price_1HD85AHSWtRGR47bAX4WFV5y", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:8080/success",
      cancelUrl: "http://localhost:8080/cancel"
    });
    if (error) {
      alert("payment failed");
    }
  }
  initializePaypal() {
    store.state.paypal
      .Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            // purchase_units changed to purchaseUnits for eslint
            purchaseUnits: [
              {
                amount: {
                  value: "0.01"
                }
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          return actions.order
            .capture()
            .then(function(details: {
              payer: { name: { given_name: string } };
            }) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
        }
      })
      .render("#paypal-button-container"); // Display payment options on your web page
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
