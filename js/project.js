$('#form').submit(function() {

  var pass1 = $('#pass').val()
  
  var pass2 = $('#confirmpass').val()
 
  if (pass1 != pass2) {
  
    alert("NO!")
    
    return false
  }
 
})