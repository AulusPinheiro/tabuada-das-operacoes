function adiç() {
  let num = document.querySelector('#tabu');
  let list = document.querySelector('#sele');

  if (num.value.length == 0) {
    window.alert('Digite um número >= 0');

  } else if (num.value < 0) {
    window.alert('Digite um número >= 0');

  } else {
    let n = Number(num.value);
    let h1 = document.createElement('h1');
    h1.textContent = `Tabuada do número : ${n}`

    list.innerHTML = '';
    list.appendChild(h1);
    for (let i = 1; i <= 10; i++) {

      let item = document.createElement('option');
      item.text = `${n} + ${i} = ${i+n}`;
      // item.value = `list${i}`;
      list.appendChild(item);
    }

  }
}



function subi() {
  let num = document.querySelector('#tabu');
  let list = document.querySelector('#sele');
  if (num.value.length == 0) {
    window.alert('Digite um número >= 0')

  } else if (num.value < 0) {
    window.alert('Digite um número >= 0');

  } else {
    let n = Number(num.value);
    let h1 = document.createElement('h1');
    h1.textContent = `Tabuada do número : ${n}`

    list.innerHTML = '';
    list.appendChild(h1);
    for (let i = n + 1; i <= 10 + n; i++) {
      let item = document.createElement('option');
      item.text = `${i} - ${n} = ${i-n}`;
      //item.value = `list${i}`;
      list.appendChild(item);
    }
  }
}

function mult() {
  let num = document.querySelector('#tabu');
  let list = document.querySelector('#sele');
  if (num.value.length == 0) {
    window.alert('Digite um número >= 0')

  } else if (num.value < 0) {
    window.alert('Digite um número >= 0');

  } else {
    let n = Number(num.value);
    let h1 = document.createElement('h1');
    h1.textContent = `Tabuada do número : ${n}`

    list.innerHTML = '';
    list.appendChild(h1);
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement('option');
      item.text = `${i} x ${n} = ${i*n}`;
      //item.value = `list${i}`;
      list.appendChild(item);
    }
  }
}

function divi() {
  let num = document.querySelector('#tabu');
  let list = document.querySelector('#sele');
  if (num.value.length == 0) {
    window.alert('Digite um número > 0')

  } else if (num.value <= 0) {
    window.alert('Digite um número > 0');
  } else {
    let n = Number(num.value);
    let h1 = document.createElement('h1');
    h1.textContent = `Tabuada do número : ${n}`

    list.innerHTML = '';
    list.appendChild(h1);
    for (let i = n; i <= 10 * n; i++) {
      let item = document.createElement('option');
      if (i % n == 0) {
        item.text = `${i} / ${n} = ${i / n }`;
        //item.value = `list${i}`;
        list.appendChild(item);
      }

    }
  }
}