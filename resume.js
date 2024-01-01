function openResume() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 768) {
      // Open resume in a new tab
      window.open('resume.pdf', '_blank');
  } else {
      // Toggle the embedded view (you can add your existing logic here)
      // For example, you can show/hide the iframe or update the src attribute.
      var resumeIframe = document.getElementById('resume-iframe');
      var resumeLink = document.getElementById('resume-link');

      if (resumeIframe.style.display === 'none') {
          resumeIframe.style.display = 'block';
          resumeLink.style.display = 'none';
      } else {
          resumeIframe.style.display = 'none';
          resumeLink.style.display = 'block';
      }
  }
}
