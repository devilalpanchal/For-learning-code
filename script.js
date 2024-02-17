/* ---------------------------- GLOBAL VARIABLES ---------------------------- */
let ipcPrice = 16.00;
let ipcPricingInterval = "month";

/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function getPriceForBillingInterval(price, int) {
  if(int === "month") {
    ipcPrice = price;
  }
  else {
    ipcPrice = (price * 12) * 0.75;
  }
}

function handleSliderChange(value) {
  let pageViews = document.getElementById("pageviews");
  let price = document.getElementById("price");

  switch(value) {
    case "2":
      ipcPrice = 36;
      getPriceForBillingInterval(ipcPrice, ipcPricingInterval);

      document.getElementById("price-slider").setAttribute("aria-valuenow", 2);

      pageViews.innerHTML = "1M Pageviews";
      price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span id='price-per-span'> / " + ipcPricingInterval + "</span>";
      break;
    case "1":
      ipcPrice = 24;
      getPriceForBillingInterval(ipcPrice, ipcPricingInterval);

      document.getElementById("price-slider").setAttribute("aria-valuenow", 1);

      pageViews.innerHTML = "500K Pageviews";
      price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span id='price-per-span'> / " + ipcPricingInterval + "</span>";
      break;
    case "0":
      ipcPrice = 16;
      getPriceForBillingInterval(ipcPrice, ipcPricingInterval);

      document.getElementById("price-slider").setAttribute("aria-valuenow", 0);

      pageViews.innerHTML = "100K Pageviews";
      price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span id='price-per-span'> / " + ipcPricingInterval + "</span>";
      break;
    case "-1":
      ipcPrice = 12;
      getPriceForBillingInterval(ipcPrice, ipcPricingInterval);

      document.getElementById("price-slider").setAttribute("aria-valuenow", -1);

      pageViews.innerHTML = "50K Pageviews";
      price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span id='price-per-span'> / " + ipcPricingInterval + "</span>";
      break;
    case "-2":
      ipcPrice = 8;
      getPriceForBillingInterval(ipcPrice, ipcPricingInterval);

      document.getElementById("price-slider").setAttribute("aria-valuenow", -2);

      pageViews.innerHTML = "10K Pageviews";
      price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span id='price-per-span'> / " + ipcPricingInterval + "</span>";
      break;
    default:
      break;
  }
}

function handleBillingIntToggle(value) {
  if(value === true) {
    ipcPricingInterval = "year";

    document.getElementById("interval-switch").setAttribute("aria-checked", true);

    handleSliderChange(document.getElementById("price-slider").value);
  }
  else {
    ipcPricingInterval = "month";

    document.getElementById("interval-switch").setAttribute("aria-checked", false);

    handleSliderChange(document.getElementById("price-slider").value);
  }
}



/* ----------------------------- EVENT HANDLERS ----------------------------- */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("price-slider").addEventListener("mousedown", function() {
    this.style.outlineWidth = "0";
  });

  document.getElementById("price-slider").addEventListener("mouseup", function() {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  document.getElementById("price-slider").addEventListener("mouseleave", function() {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  document.getElementById("price-slider").oninput = function() {
    handleSliderChange(this.value);

    var fillTrackPct = (this.value - this.min) / (this.max - this.min) * 100;

    this.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
                            + fillTrackPct + "%, hsl(224, 65%, 95%) " + fillTrackPct + "%, hsl(224, 65%, 95%) 100%)";
  };

/* ----- */

  document.getElementById("interval-switch").oninput = function() {
    handleBillingIntToggle(this.checked);
  };

});
