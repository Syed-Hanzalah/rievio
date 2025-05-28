
    const reviewURL = 'https://search.google.com/local/writereview?placeid=ChIJ43CEmLZ3nkcR_vdbrKRgyf0';
    let selectedRating = 0;

    function show(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.getElementById('help-text').style.display = (id==='screen1') ? 'block' : 'none';
    }

    // Screen1: Sterne auswählen
    document.querySelectorAll('#screen1 .star').forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = +star.dataset.value;
        document.querySelectorAll('#screen1 .star').forEach(s =>
          s.classList.toggle('filled', +s.dataset.value <= selectedRating)
        );
        const btn = document.getElementById('screen1-btn');
        if (selectedRating >= 4) {
          btn.textContent = 'Bewerten';
          btn.href = reviewURL;
        } else {
          btn.textContent = 'Abschicken';
          btn.removeAttribute('href');
        }
      });
    });
    document.getElementById('screen1-btn').addEventListener('click', e => {
      if (selectedRating >= 4) return;
      e.preventDefault();
      const container = document.getElementById('screen2-stars');
      container.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = '★';
        star.className = 'star' + (i <= selectedRating ? ' filled' : '');
        star.style.cursor = 'default';
        container.appendChild(star);
      }
      show('screen2');
    });

    // FAQ-Link auf Screen1
    document.getElementById('help-link').addEventListener('click', e => {
      e.preventDefault();
      show('screen5');
    });

    // Screen2/3/5 Navigation
    document.getElementById('back2').onclick        = () => show('screen1');
    document.getElementById('submit-feedback').onclick = () => show('screen3');
    document.getElementById('back5').onclick        = () => show('screen1');

    // FAQ-Buttons zurück zu Screen1
    document.getElementById('faq-btn-top').addEventListener('click', e => {
      e.preventDefault();
      show('screen1');
    });
    document.getElementById('faq-btn-bottom').addEventListener('click', e => {
      e.preventDefault();
      show('screen1');
    });

    // Initial
    show('screen1');
  