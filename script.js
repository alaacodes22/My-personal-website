document.getElementById('year').textContent = new Date().getFullYear();

// Use Chart.js to render three visualizations
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
const toolsCtx = document.getElementById('toolsChart').getContext('2d');

// Skills bar chart (personalized)

new Chart(skillsCtx, {
  type: 'bar',
  data: {
    labels: ['SQL','Python','C++','Airflow','Spark','Azure'],
    datasets: [{
      label: 'Proficiency',
      data: [88,90,75,80,78,82],
      backgroundColor: ['#7b1f2d','#b85c68','#e9dfd6','#c9a89b','#f6efe9','#a84b5b']
    }]
  },
  options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}
});

// (Projects timeline removed)

// Tools pie
new Chart(toolsCtx, {
  type: 'pie',
  data: {
    labels: ['Pandas','NumPy','SQL','Azure'],
    datasets: [{
      data: [45,25,20,10],
      backgroundColor: ['#7b1f2d','#e9dfd6','#c9a89b','#b85c68']
    }]
  },
  options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}
});

// Lightbox functionality for project images
(function(){
  const lightbox = document.getElementById('lightbox');
  if(!lightbox) return;
  const imgEl = document.getElementById('lightbox-img');
  const capEl = document.getElementById('lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt, caption){
    imgEl.src = src;
    imgEl.alt = alt || '';
    capEl.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    imgEl.src = '';
    capEl.textContent = '';
  }

  document.querySelectorAll('.lightbox-trigger').forEach(el=>{
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', e=>{
      const src = el.dataset.full || el.src;
      const caption = el.dataset.caption || el.alt || '';
      openLightbox(src, el.alt, caption);
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeLightbox(); });
})();
