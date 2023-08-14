// BT1:
// b1: xác định input:
// a, b, c lần lược là các số nguyên được nhập vào
// b2: xử lý
function hanldeNum() {
  var a = +document.getElementById("soThuNhat").value;
  var b = +document.getElementById("soThuHai").value;
  var c = +document.getElementById("SoThuBa").value;

  var ketqua;
  if (a < b && b < c) {
    ketqua = document.getElementById("resultNum").innerHTML = `
    Kết quả:
    <p> ${a} < ${b} < ${c} </p>`;
  } else if (a < c && c < b) {
    ketqua = document.getElementById("resultNum").innerHTML = `
    Kết quả:
    <p> ${a} < ${c} < ${b} </p>`;
  } else if (b < a && a < c) {
    ketqua = document.getElementById("resultNum").innerHTML = `
    Kết quả:
    <p> ${b} < ${a} < ${c} </p>`;
  } else if (b < c && c < a) {
    ketqua = document.getElementById("resultNum").innerHTML = `
    Kết quả:
    <p> ${b} < ${c} < ${a} </p>`;
  } else if (c < b && b < a) {
    ketqua = document.getElementById("resultNum").innerHTML = `
    Kết quả:
    <p> ${c} < ${b} < ${a} </p>`;
  } else {
    ketqua = document.getElementById("resultNum").innerHTML = `
    Kết quả:
    <p> ${c} < ${a} < ${b} </p>`;
  }
}
// b3: In ra kết quả
document.getElementById("hanldeNum").onclick = hanldeNum;

//------------------------------------------------
// BT2:
// b1:xác định input
// B: ba
// M: mẹ
// A: anh trai
// E: em gái
// b2:xử lý

function hanldeLevel() {
  var vaiVe = document.getElementById("chonVaiVe").value;
  if (vaiVe == "B") {
    document.getElementById("resultLevel").innerHTML = "Hello! PAPA";
  } else if (vaiVe == "M") {
    document.getElementById("resultLevel").innerHTML = "Hello! MAMA";
  } else if (vaiVe == "A") {
    document.getElementById("resultLevel").innerHTML = "Hello! Brother";
  } else {
    document.getElementById("resultLevel").innerHTML = "Hello! Sister";
  }
}
// b3: in ra kết quả
document.getElementById("hanldeLevel").onclick = hanldeLevel;

//---------------------------------------------------

// BT3:
// b1: xác đinh input
// number1: số nguyên thứ nhất
// number2: số nguyên thứ hai
// number3: số nguyên thứ ba
// b2: xử lý

function hanldeNumber() {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  if (number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 3</p>
    <p>Số lẻ: 0</p>`;
  } else if (number1 % 2 !== 0 && number2 % 2 === 0 && number3 % 2 === 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 2</p>
    <p>Số lẻ: 1</p>`;
  } else if (number1 % 2 === 0 && number2 % 2 !== 0 && number3 % 2 === 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 2</p>
    <p>Số lẻ: 1</p>`;
  } else if (number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 !== 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 2</p>
    <p>Số lẻ: 1</p>`;
  } else if (number1 % 2 !== 0 && number2 % 2 !== 0 && number3 % 2 === 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 1</p>
    <p>Số lẻ: 2</p>`;
  } else if (number1 % 2 === 0 && number2 % 2 !== 0 && number3 % 2 !== 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 1</p>
    <p>Số lẻ: 2</p>`;
  } else if (number1 % 2 !== 0 && number2 % 2 === 0 && number3 % 2 !== 0) {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 1</p>
    <p>Số lẻ: 2</p>`;
  } else {
    document.getElementById("resultNumber").innerHTML = `
    <p>Số chẵn: 0</p>
    <p>Số lẻ: 3</p>`;
  }
}
// b3:in ra kết quả
document.getElementById("hanldeNumber").onclick = hanldeNumber;

//----------------------------------------------

// BT4:
// b1: xác đinh input:
// canhM: cạnh M;
// canhN: cạnh NaN;
// canhO: cạnh O;
// b2: xử lý

function hanldeCanh() {
  var M = +document.getElementById("canhM").value;
  var N = +document.getElementById("canhN").value;
  var O = +document.getElementById("canhO").value;

  if ( M === N && M === O ) {
    document.getElementById("resultCanh").innerHTML = "=> Tam giác đều";
  } else if (M === N || M === O || N === O) {
    document.getElementById("resultCanh").innerHTML = "=> Tam giác cân";
  } else if (
    M * M + N * N === O * O ||
    M * M + O * O === N * N ||
    N * N + O * O === M * M
  ) {
    document.getElementById("resultCanh").innerHTML = "=> Tam giác vuông";
  } else {
    document.getElementById("resultCanh").innerHTML = "=> Tam giác ";
  }
}

// b3: in ra kết quả
document.getElementById('hanldeCanh').onclick = hanldeCanh;