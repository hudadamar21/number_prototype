// format currency
Number.prototype.format = function(currency, {type, fraction} = {}) {
  const formatter = new Intl.NumberFormat(type || 'id-ID', {
    style: 'currency',
    currency: currency || 'IDR',
    minimumFractionDigits: fraction || 0
  })

  const number = this.valueOf()

  return formatter.format(number)
} 