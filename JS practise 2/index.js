//Exercies 1
window.onload = function() {
    count = (slovo) => {
      if (slovo.length > 8) {
        slovo = '<span style="background:yellow;">' + slovo + '</span>';
      } else {
        slovo;
      }
      return slovo;
    }
    var x = document.querySelector("#dior").innerText;
    var y = x.trim().split(' ').map(count).join(' ');
    document.querySelector("#dior").innerHTML = y;

  }
  //Exercies 4
  function count(){


      var x = document.getElementsByTagName("h1");


      var y = 0;

      for(var i = 0; i < x.length; i++)
      {
          y += x[i].innerHTML.split(' ').length;
      }

      document.write("Words: "+y);
  }
  count();
  //Exercies 5
  Array.from(document.querySelectorAll('h1'))
.forEach(h1 => {
  h1.innerHTML = h1.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g, '😲');
}
)
p.innerHTML = p.innerHTML
 .split(/\.[^\.|<]/)
 .join('.</p><p>') + '</p>';
