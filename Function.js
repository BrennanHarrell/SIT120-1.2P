// imperial gallon
function convertToLitres(gallons) {
    return gallons * 4.546;
}
let litres = convertToLitres(10);
document.write(litres);

document.write("<br>");
function javascriptFunc(name) {
    document.write("Javascript using " + name);
}

(javascriptFunc("HTML"))