// Function to set the visibility of resume content based on screen width
function setResumeVisibility() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var resumeIframe = document.getElementById('resume-iframe');
  var resumeLink = document.getElementById('resume-link');

  if (screenWidth < 768) {
      // Hide the iframe and show the link
      resumeIframe.style.display = 'none';
      resumeLink.style.display = 'block';
  } else {
      // Remove the existing iframe
      resumeIframe.parentNode.removeChild(resumeIframe);

      // Create a new iframe and set the PDF source
      resumeIframe = document.createElement('iframe');
      resumeIframe.id = 'resume-iframe';
      resumeIframe.className = 'embed-responsive-item';
      resumeIframe.src = 'resume.pdf';

      // Append the new iframe to the container
      var container = document.querySelector('.embed-responsive');
      container.appendChild(resumeIframe);

      // Hide the link
      resumeLink.style.display = 'none';
  }
}

// Initial check on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Set the initial visibility of the resume content
  setResumeVisibility();
});

// Function to open the resume in a new tab
function openResume() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 768) {
      // Open resume in a new tab
      window.open('resume.pdf', '_blank');
  }
}

// Check screen width on window resize
window.addEventListener('resize', setResumeVisibility);

// Check screen width on orientation change for mobile devices
window.addEventListener('orientationchange', setResumeVisibility);
