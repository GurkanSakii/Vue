<template>
    <router-link class="invoice flex" :to="{ name: 'InvoiceView', params: { invoicesId: inv.invoiceId } }">
    <div class="left flex">
      <span class="tracking-number">#{{ inv.invoiceId }}</span>
      <span class="due-date">{{ inv.paymentDueDate }}</span>
      <span class="person">{{ inv.clientName }}</span>
    </div>
    <div class="right flex">
      <span class="price">${{ inv.invoiceTotal }}</span>
      <div
        class="status-button flex"
        :class="{ paid: inv.invoicePaid, draft: inv.invoiceDraft, pending: inv.invoicePending }"
      >
        <span v-if="inv.invoicePaid">Paid</span>
        <span v-if="inv.invoiceDraft">Draft</span>
        <span v-if="inv.invoicePending">Pending</span>
      </div>
      <div class="icon">
        <img src="../assets/icon-arrow-right.svg" alt="" />
      </div>
    </div>
    </router-link>
</template>

<script>
export default {
  props: ["inv"],
};
</script>

<style lang="scss" scoped>
.invoice {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;
  span {
    font-size: 13px;
  }
  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;
    span {
      flex: 1;
    }
    .tracking-number {
      text-transform: uppercase;
    }
  }
  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;
    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>
