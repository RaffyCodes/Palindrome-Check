function isPalindrome(string) {
  // Return boolean if string is a palindrome or not
	if (string.split("").reverse().join("") === string){
		return true;
	} else 
	return false;
}
