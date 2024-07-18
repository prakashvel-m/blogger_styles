document.addEventListener('DOMContentLoaded', function() {
  const copyButtons = document.querySelectorAll('.copy-button');
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const codeSnippet = this.nextElementSibling.innerText;
      navigator.clipboard.writeText(codeSnippet).then(function() {
        alert('Code copied to clipboard!');
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    });
  });
});
