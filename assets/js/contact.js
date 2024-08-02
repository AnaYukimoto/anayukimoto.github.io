(function () {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init("dSuiextIVvd9hAIo_");
    })();
  
    window.onload = function () {
      document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
  
        var form = this; // Adicione esta linha para definir a variável form
  
        emailjs.sendForm('service_42vsbgg', 'template_6yqupmo', form)
          .then(function () {
            console.log('E-mail enviado com sucesso:');
            alert('Obrigada! Sua mensagem foi enviada com sucesso.');
            form.reset();
          }, function (error) {
            console.error('Erro ao enviar e-mail:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
          });
      });
    }