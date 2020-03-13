module.exports = function toReadable (number) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number < 10) {
      return a[number];
    }
    else if(number < 20){
      return b[number-10];
    }
    else if(number < 100 && number%10 == 0 && number != 10){
        return c[Math.trunc(number/10)-2];
      }
    else if(number < 100){
      return c[Math.trunc(number/10)-2] + ' ' + a[number%10];
    }
    else if(number < 1000 && number%10 == 0 && number%100 != 10){
        if(number%100 < 10){
          return a[Math.trunc(number/100)] + ' hundred';
        }
        else if (number%100 < 20)
          return a[Math.trunc(number/100)]  + ' hundred' ;
          else 
            return a[Math.trunc(number/100)] + ' hundred ' + c[Math.trunc(number%100/10)-2];
    }
    else if(number < 1000){
        if(number%100 < 10){
          return a[Math.trunc(number/100)] + ' hundred ' + a[number%100];
        }
        else if (number%100 < 20)
          return a[Math.trunc(number/100)]  + ' hundred ' + b[(number%100)-10];
          else 
            return a[Math.trunc(number/100)] + ' hundred ' + c[Math.trunc(number%100/10)-2] + ' ' + a[number%10];
      }   
}
