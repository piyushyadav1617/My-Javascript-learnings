//US telephone number validator

function telephoneCheck(str) {
  let regArr = [
    /^\d{3}[-\s]*\d{3}[-\s]*\d{4}$/,
    /^\(\d{3}\)\s*\d{3}-\d{4}$/,
    /^1\s\d{3}[-\s]*\d{3}[-\s]*\d{4}$/,
    /^1\s*\(\d{3}\)\s*\d{3}-\d{4}$/,
  ];
  return regArr.some((reg) => reg.test(str));
}

console.log(telephoneCheck("555-555-5555"));
