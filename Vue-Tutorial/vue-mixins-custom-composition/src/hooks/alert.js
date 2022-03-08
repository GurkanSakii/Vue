import { ref } from "vue";

export default function useAlert(statingVisiblity = false) {
  const alertIsVisible = ref(statingVisiblity);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [
    alertIsVisible,
    showAlert,
    hideAlert,
  ];
}
