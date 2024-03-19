document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    if (validateForm()) {
      // Gather form data
      var formData = {
        name: document.getElementById('name').value,
        mascot: document.getElementById('mascot').value,
        imageCaption: document.getElementById('imageCaption').value,
        personalBackground: document.getElementById('personalBackground').value,
        professionalBackground: document.getElementById('professionalBackground').value,
        academicBackground: document.getElementById('academicBackground').value,
        webDevelopmentBackground: document.getElementById('webDevelopmentBackground').value,
        primaryPlatform: document.getElementById('primaryPlatform').value,
        courses: getCourses(),
        funnyThing: document.getElementById('funnyThing').value,
        anythingElse: document.getElementById('anythingElse').value
      };
  
      // Create HTML content to display gathered information
      var content = "<h2>Survey Results</h2>";
      content += "<p><strong>Name:</strong> " + formData.name + "</p>";
      content += "<p><strong>Mascot:</strong> " + formData.mascot + "</p>";
      
      // Display the image if provided
      if (document.getElementById('image').files.length > 0) {
        var file = document.getElementById('image').files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
          content += "<img src='" + event.target.result + "' alt='Uploaded Image'><br>";
          displayResults(content, formData);
        };
        reader.readAsDataURL(file);
      } else {
        displayResults(content, formData);
      }
    }
  });

    // Function to add a new course entry field
    function addCourse() {
        var coursesContainer = document.getElementById('coursesContainer');
    
        // Create a new input field for the course
        var newCourseInput = document.createElement('input');
        newCourseInput.type = 'text';
        newCourseInput.classList.add('course');
        newCourseInput.name = 'courses[]';
        newCourseInput.required = true;
        var courseId = 'course' + (coursesContainer.children.length + 1);
        newCourseInput.id = courseId;
    
        // Create a delete button for the course
        var deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
        var courseEntry = this.parentElement;
        courseEntry.parentElement.removeChild(courseEntry);
        };
    
        // Create a label for the new course entry
        var label = document.createElement('label');
        label.textContent = 'Course:';
        label.htmlFor = courseId;
    
        // Create a container for the new course entry
        var courseEntry = document.createElement('div');
        courseEntry.classList.add('courseEntry');
        courseEntry.appendChild(newCourseInput);
        courseEntry.appendChild(deleteButton);
        courseEntry.appendChild(label);
    
        // Append the new course entry to the courses container
        coursesContainer.appendChild(courseEntry);
    }
  
  // Get courses
  function getCourses() {
    var courses = [];
    var courseInputs = document.querySelectorAll('.course');
    courseInputs.forEach(function(input) {
      if (input.value.trim() !== '') {
        courses.push(input.value.trim());
      }
    });
    return courses;
  }
  
  // Function to display survey results
  function displayResults(content, formData) {
    content += "<p><strong></strong> " + formData.imageCaption + "</p>";
    content += "<p><strong>Personal Background:</strong> " + formData.personalBackground + "</p>";
    content += "<p><strong>Professional Background:</strong> " + formData.professionalBackground + "</p>";
    content += "<p><strong>Academic Background:</strong> " + formData.academicBackground + "</p>";
    content += "<p><strong>Background in Web Development:</strong> " + formData.webDevelopmentBackground + "</p>";
    content += "<p><strong>Primary Computer Platform:</strong> " + formData.primaryPlatform + "</p>";
    content += "<p><strong>Courses currently taking:</strong> " + formData.courses.join(", ") + "</p>";
    content += "<p><strong>Funny thing:</strong> " + formData.funnyThing + "</p>";
    content += "<p><strong>Anything else:</strong> " + formData.anythingElse + "</p>";
  
    // Replace form with survey results
    document.getElementById('surveyForm').innerHTML = content;
  }
  
  // Function to validate form
  function validateForm() {
    var inputs = document.querySelectorAll('input, textarea');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required') && inputs[i].value.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
      }
    }
    if (!document.getElementById('agreement').checked) {
      alert('Please agree to the terms.');
      return false;
    }
    return true;
  }