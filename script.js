// Panjanga dan pilihan tipe password yang dipilih
const generatePassword = (length, options) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  let charset = "";
  if (options.includeUppercase) charset += uppercase;
  if (options.includeLowercase) charset += lowercase;
  if (options.includeNumbers) charset += numbers;
  if (options.includeSpecialChars) charset += specialChars;

  // Kalo ga ada input
  if (charset === "") {
    alert("Masukin Minimal Satu Pilihan Maas");
    return "";
  }

  // Membuat password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

// Mengyusun output user sesuai yang mereka pilih
document.getElementById("generateBtn").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value, 10);
  const options = {
    includeUppercase: document.getElementById("includeUppercase").checked,
    includeLowercase: document.getElementById("includeLowercase").checked,
    includeNumbers: document.getElementById("includeNumbers").checked,
    includeSpecialChars: document.getElementById("includeSpecialChars").checked,
  };

  // Menampilkan outputpassword
  const password = generatePassword(length, options);
  document.getElementById("passwordOutput").value = password; // Menampilkan password di input field
});

// Copypaste output
document.getElementById("copyBtn").addEventListener("click", () => {
  const passwordField = document.getElementById("passwordOutput");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
