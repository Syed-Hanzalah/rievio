  
    function show(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    document.getElementById('btn-yes').addEventListener('click', () => show('screen2'));
    document.getElementById('btn-no').addEventListener('click', () => show('screen3'));

    document.getElementById('back2').addEventListener('click', () => show('screen1'));
    document.getElementById('back3').addEventListener('click', () => show('screen1'));

    const stars = document.querySelectorAll('#screen3 .star');
    const feedbackField = document.getElementById('feedback-field');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = +star.dataset.value;
        stars.forEach(s => s.classList.toggle('filled', +s.dataset.value <= rating));
        feedbackField.style.display = 'flex';
      });
    });

    document.getElementById('submit3').addEventListener('click', () => show('screen4'));
