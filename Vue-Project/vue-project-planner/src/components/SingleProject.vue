<template>
  <div class="project">
    <div class="actions">
      <h3>{{ proj.namesurname }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["proj"],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
