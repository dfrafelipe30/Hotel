// Code for validating the form
// Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
// for details
var frmvalidator  = new Validator("emailForm");
frmvalidator.addValidation("nombre","req","Ingrese su nombre"); 
frmvalidator.addValidation("email","email","Ingrese su correo");
frmvalidator.addValidation("celular","req","Ingrese su celular") 
frmvalidator.addValidation("mensaje","req","Su mensaje esta vacio");