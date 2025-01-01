function enough(cap, on, wait) {
  //   if (cap == on + wait) {
  //     return 0;
  //   } else {
  //     return wait - (cap - on) > 0 ? wait - (cap - on) : 0;
  //   }
  return cap == on + wait ? 0 : wait - (cap - on) > 0 ? wait - (cap - on) : 0;
}
console.log(enough(20, 5, 5));
