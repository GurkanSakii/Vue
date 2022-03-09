export const emailvalidator = (email) => {
  if (!email) return "Email boş bırakılamaz.";
  if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) return "Lütfen geçerli bir email giriniz.";
  return null;
};

export const namesurnameValidator = (name) => {
  if (!name) return "Bu alan boş bırakılamaz.";
  if (!(/^[a-zA-Z0-9]{3,24}$/.test(name))) return "Lütfen özel karakter girmeyiniz ve 3-24 harf aralığında yazınız.";
  return null;
};

export const phoneValidator = (phone) => {
  if (!phone) return "Telefon alanı boş bırakılamaz.";
  if (!(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone))) return "Lütfen geçerli bir telefon numarası giriniz.";
  return null;
};

export const passwordValidator = (password) => {
  if (!password) return "Şifre alanı boş bırakılamaz.";
  if (!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password))) return "Lütfen minimum sekiz karakter, 1 harf , 1 numara ve 1 özel karakter giriniz.";
  return null;
};
export const checkAgreement = (agreement) => {
  if (agreement == false) return "Lütfen sözleşmeyi kabul ediniz.";
  return null;
};
