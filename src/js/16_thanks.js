function loadThanksContent() {
  const orderNumber = document.getElementById("thanks__orderNum");
  const orderNumberStorage = localStorage.getItem("ordernumber");
  console.log(orderNumberStorage);
  orderNumber.innerHTML = orderNumberStorage ? orderNumberStorage : 4786413;

  console.log("load thanks logic");
}
