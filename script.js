function tempConvertF(cel) {
  let convertF = Math.floor(((cel * 9) / 5 + 32) * 10) / 10;
  return console.log(convertF);
}

tempConvertF(100);
tempConvertF(32);
tempConvertF(40);
tempConvertF(22);

function tempConvertC(far) {
  let convertC = Math.floor((((far - 32) * 5) / 9) * 10) / 10;
  return console.log(convertC);
}

tempConvertC(25);
tempConvertC(54);
tempConvertC(68);
tempConvertC(100);
