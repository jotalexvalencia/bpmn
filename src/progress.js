document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const checkboxes = document.querySelectorAll('.lesson-checkbox');
  const progressPercentage = document.getElementById('progress-percentage');
  const progressCircle = document.querySelector('.progress-circle');
  const saveButton = document.getElementById('save-progress');
  const resetButton = document.getElementById('reset-progress');

  // Load saved progress when page loads
  loadProgress();

  // Update progress when checkboxes are checked/unchecked
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
  });

  // Save progress to localStorage
  saveButton.addEventListener('click', function () {
    const progress = {};

    checkboxes.forEach(checkbox => {
      progress[checkbox.id] = checkbox.checked;
    });

    localStorage.setItem('bpmnCourseProgress', JSON.stringify(progress));
    alert('¡Progreso guardado correctamente!');
  });

  // Reset progress
  resetButton.addEventListener('click', function () {
    if (confirm('¿Estás seguro de que deseas reiniciar todo el progreso?')) {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });

      updateProgress();
      localStorage.removeItem('bpmnCourseProgress');
      alert('Progreso reiniciado.');
    }
  });

  // Function to update visual progress
  function updateProgress() {
    const totalLessons = checkboxes.length;
    const completedLessons = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const percentage = Math.round((completedLessons / totalLessons) * 100);

    // Update percentage text
    progressPercentage.textContent = `${percentage}%`;

    // Update circular progress indicator
    progressCircle.style.background = `conic-gradient(#3498db ${percentage}%, #f1f1f1 0%)`;
  }

  // Function to load saved progress
  function loadProgress() {
    const savedProgress = localStorage.getItem('bpmnCourseProgress');

    if (savedProgress) {
      const progress = JSON.parse(savedProgress);

      checkboxes.forEach(checkbox => {
        if (progress[checkbox.id]) {
          checkbox.checked = true;
        }
      });

      updateProgress();
    } else {
      // Initialize progress display if no saved progress
      updateProgress();
    }
  }
});
