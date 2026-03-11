import CryptoJS from "crypto-js";

// Secret key for encryption — in a real app this would be in an environment variable
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const appointmentsApi = {
  getAll: () => {
    try {
      const encryptedData = localStorage.getItem("appointmentsList");
      if (!encryptedData) return [];
      // Decrypt the data
      const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
      const decryptedJson = bytes.toString(CryptoJS.enc.Utf8);
      // Guard: if decryption produced empty string, data was stored in the old format
      if (!decryptedJson) {
        localStorage.removeItem("appointmentsList");
        return [];
      }
      return JSON.parse(decryptedJson);
    } catch (error) {
      console.error("Could not load or decrypt from Local Storage", error);
      // Clear corrupted data so the app doesn't crash on every reload
      localStorage.removeItem("appointmentsList");
      return [];
    }
  },
  saveAll: (list) => {
    const plainList = JSON.parse(JSON.stringify(list));
    setTimeout(() => {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(plainList),
        SECRET_KEY,
      ).toString();
      localStorage.setItem("appointmentsList", encryptedData);
    }, 0);
  },
};
