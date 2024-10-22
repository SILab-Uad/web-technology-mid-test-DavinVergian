// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
  // Character sets for password generation
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // Create a variable for the character set based on selected options
  let charpw = "";

  if (options.includeUppercase) charpw += uppercase;
  if (options.includeLowercase) charpw += lowercase;
  if (options.includeNumbers) charpw += numbers;
  if (options.includeSpecialChars) charpw += specialChars;

  // if (charpw === "") {
  //     alert("Minimal pilih 1 opsi dek!");
  //     return "";
  // }

  if (charpw === "") {
    throw new Error("At least one character type must be selected.");
  }

  // Generate the password based on the selected criteria
  let pw = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charpw.length);
    pw += charpw[randomIndex];
  }
  return pw;
};

// TODO: Add event listener to the button to call generatePassword and display the output
// npm

// document.getElementById("generateBtn").addEventListener("click", () => {
//     const length = document.getElementById("length").value;
//     const options = {
//         includeUppercase: document.getElementById("includeUppercase").checked,
//         includeLowercase: document.getElementById("includeLowercase").checked,
//         includeNumbers: document.getElementById("includeNumbers").checked,
//         includeSpecialChars: document.getElementById("includeSpecialChars").checked,
//     };

//     const pw = generatePassword(length, options);
//     document.getElementById("passwordOutput").value = pw;
// });

// BONUS: Implement the copy to clipboard functionality
// document.getElementById("copyBtn").addEventListener("click", () => {
//     const pw = document.getElementById("passwordOutput");
//     pw.select();
//     document.execCommand("copy");
//     alert("Password copied to clipboard!");
// });