export const emailvalidator = (email) => {
  if (!email) return "Email boş bırakılamaz.";
  if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) return "Lütfen geçerli bir email giriniz.";
  return null;
};
