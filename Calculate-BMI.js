function bmi(weight, height) {
    let res = weight / Math.pow(height,2)
    console.log(res)
    return res <=18.5?"Underweight":res<=25.0?"Normal":res<=30.0?'Overweight':'Obese'
  }
  console.log(bmi(90, 1.80))