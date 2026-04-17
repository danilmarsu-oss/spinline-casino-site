(function () {
  var questions = document.querySelectorAll('.faq-question');

  questions.forEach(function (button) {
    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      var answer = button.nextElementSibling;

      button.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = isOpen ? '0px' : answer.scrollHeight + 'px';
    });
  });

  var dateElement = document.getElementById('updated-date');
  if (dateElement) {
    var now = new Date();
    var formattedDate = new Intl.DateTimeFormat('nb-NO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(now);

    dateElement.textContent = formattedDate;
  }
})();
