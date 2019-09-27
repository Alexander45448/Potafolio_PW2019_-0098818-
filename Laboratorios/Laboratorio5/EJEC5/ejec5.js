function palindrome(palabra) {
  var PalPalindrome = true;
  var Paloriginal = palabra.split("");
  var invertido = palabra.split("").reverse();

  for (var i = 0; i < Paloriginal.length; i++) {
    if (invertido[i] != Paloriginal[i]) {
      console.log("no es palindrome");
      PalPalindrome = false;
      break;
    }
    console.log("si es palindrome");
  }
}
palindrome("anitalavalatina");
