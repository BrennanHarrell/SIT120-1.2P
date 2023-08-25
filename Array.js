const Array1 = [0, 1, 2, 3, 4, 5, 6]
const Array2 = ["String", "Integer", "Boolean"]

document.writeln("Using the isArray() method to check if Array1 is an array: <br>", Array.isArray(Array1)); 

document.write("<br><br>")
document.writeln("The length of Array1 is: <br>", Array1.length)

document.write("<br><br>")
document.writeln("The following is a demonstration of pushing and popping elements in and out of an array: <br>")
document.writeln("Array2 prior to adding a new element: <br>",Array2.toString())
document.write("<br><br>")
Array2.push("Array")
document.writeln("Array2 after the Array element has been added: <br>", Array2.toString())
document.write("<br><br>")
Array2.pop()
Array2.pop()
document.writeln("Array2 after the pop method has been used twice: <br>", Array2.toString())