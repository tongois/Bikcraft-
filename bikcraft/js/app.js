$('p').append( 'isso é uma iserção '); // adiciona conteudo após a tag selecionada 

$('h2').append($('.introducao h1')); // pega o conteudo que esta dentro de '.inroducao h1' e insere em todos os 'h2' da pagina 

$('h2').appendTo($('.introducao h1')); // insere tudo que estiver em 'h2' e coloca no 'introducao h1'

$('h2').prepend('teste'); // insere o conteudo 'teste'  ANTES do conteudo da tag h2

$('p').prependTo('h3'); // insere o que conteudo de p ANTES de h3 


var conteudo =  $('p').html(); // pega o conteudo do PRIMEIRO item selecionado e transforma em uma string 
console.log(conteudo); // vai mostrar o primeiro conteudo de p em forma de string

 $('p').html('teste'); // insere a palavra 'teste' em TODAS tags p da página

$('p').text('<span> teste</span>'); // adiciona o texto exatamente como é, nao identifica tags html  

$('h2').text();  // pega o conteudo de todos os itens e junta em uma unica string 

$('p').after('<span> ** </span>'); // adiciona conteudo APÓS  a tag selecionada , em todas as tags 

$('<span> ** </span>').insertAfter('p');   // insere o conteudo do primeiro parametro depois do segundo (p)

$('p').before('<span> // </span>'); // insere conteudo antes da tag p 

$('p').wrap('<div class = "azul"></div>'); // ennvolve todas as tags p dentro de uma div por exemplo

$('ul li a')unwrap(); // retira o elemento pai do conteudo selecionado , no caso vai retirar o li 












