// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const htmlElements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let strArr = str.split("");
  return strArr
    .map((elem) => {
      return htmlElements[elem] || elem;
    })
    .join("");
}

convertHTML("Schindler's List");
