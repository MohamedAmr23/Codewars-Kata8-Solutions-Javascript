function rentalCarCost(d) {
    let price = 40 * d;
    if (d < 3) return price;
    return d >= 7 ? price - 50 : price - 20;
  }
  console.log(rentalCarCost(7));