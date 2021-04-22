$(document).ready(function(){
  
  // array delle cose da fare
  var arrLyst = [
    'fare spesa', 
    'andare in palestra', 
    'fare gli esercizi'
  ];

  // ciclo per contare l'array e ogni elemento viene inserito in ul
  for(var i = 0; i < arrLyst.length; i++){
    var elenco = arrLyst[i];

    var textB = '<li><p>' + elenco + '</p><i class="far fa-trash-alt"></i></li>';
    $('.list-items ul').append(textB)
  }

  // cliccando sul cestino eliminiamo l'elemento dalla lista
  $(document).on('click', '.fa-trash-alt', function(){
    $(this).parent().remove();
  })

  //aggiungiamo alla lista il testo inserito dall'utente
  $('input').keyup(function(event){
    if(event.which === 13){
      var textB = $(this).val().trim();
      var textB = '<li><p>' + textB + '</p><i class="far fa-trash-alt"></i></li>';
      $('.list-items ul').append(textB)
      $(this).val("")
    }
  })







})