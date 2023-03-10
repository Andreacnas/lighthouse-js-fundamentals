for (var i = 100; i <= 200; i++) {
  var loo = i % 3 == 0;
  var lig = i % 4 == 0;
  console.log(loo ? lig ? "LoopyLighthouse" : "Loopy" : lig ? "Lighthouse" : i);
}
