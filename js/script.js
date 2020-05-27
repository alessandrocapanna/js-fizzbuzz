var numero = document.getElementById('numero')
for (var i = 1; i <= 100; i++) {

  if (i % 15 == 0) {
    numero.innerHTML += '<li>' + 'fizzbuzz' + '</li>';
  }else if (i % 5 == 0) {
    numero.innerHTML += '<li>' + 'buzz' + '</li>';
  }else if (i % 3 == 0) {
    numero.innerHTML += '<li>' + 'fizz' + '</li>';
  }else {
    numero.innerHTML += '<li>' + i + '</li>';
  }
}
