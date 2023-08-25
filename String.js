String1 = "Hello this is my javascript for 1.2P";
String2 = "in this task I will use some string methods"

// String chatAt method
document.writeln("The word that will be used is: ", String1); 
document.write("<br>");
document.writeln("The char at index 0 is: ", String1.charAt(0))

// String replace method
document.write("<br><br>");
StringReplacement = String1.replace("Hello", "Goodbye");
document.writeln("Replacing the word Hello with Goodbye using the .replace() method: <br> ", StringReplacement)

// String concat method
document.write("<br><br>");
StringConcatenation = String1.concat(" and ", String2);
document.writeln("Concatenating String1 with String2 using the.concat() method: <br> ", StringConcatenation)

// String toUpperCase method
document.writeln("<br><br>");
StringUpperCase = String1.toUpperCase();
document.writeln("Converting String1 to uppercase using the.toUpperCase() method: <br>", StringUpperCase)

// String endsWith method
document.writeln("<br><br>");
StringendsWith = String1.endsWith("1.2P");
document.writeln("Checking if String1 ends with '1.2P' using the endsWith() method: <br> ", StringendsWith)
