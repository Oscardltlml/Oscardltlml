function KTG(e_D,e_c){     
  let C0 = 2.9969 - 0.0090 *(e_c) + 0.01338 * Math.pow(e_c,2);
  let C1 = 0.0609 + 0.2590 *(e_c) - 0.2649 * Math.pow(e_c,2);
  let C2 = 0.1391 + 0.1804 *(e_c) + 0.1538 * Math.pow(e_c,2);
  let C3 = 0.5103 + 0.7518 *(e_c) - 0.4977 * Math.pow(e_c,2);
  return KTG = C0 + C1 / (e_D) + C2 / Math.pow(e_D,2) + C3 / Math.pow(e_D,3)
  
}

function xsquare(x) {
  return Math.pow(x,2);
}



