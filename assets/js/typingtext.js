function typeWriter(textElement, delay) {
    const text = textElement.innerHTML;
    let index = 0;
    textElement.innerHTML = '';

    function type() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      }
    }
    type();
  }
  const typingText = document.getElementById('typing-text');
  typeWriter(typingText, 100);