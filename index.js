document.querySelector('.dice-icon').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const adviceID = data.slip.id;
        const adviceText = data.slip.advice;
  
        document.getElementById('advice-ID').textContent = `Advice #${adviceID}`;
        document.getElementById('advice-text').textContent = `"${adviceText}"`;
      })
      .catch(error => console.error('Error fetching advice:', error));
  }
  
  window.onload = fetchAdvice;
  