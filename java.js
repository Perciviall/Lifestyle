// JavaScript code

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const calorieForm = document.getElementById('calorie-form');
    const exerciseForm = document.getElementById('exercise-form');
    const recordsList = document.getElementById('records-list');
    const exerciseCalendarBody = document.getElementById('exercise-calendar-body');
  
    calorieForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
  
      // Get the input values
      const mealNameInput = document.getElementById('meal-name');
      const caloriesInput = document.getElementById('calories');
      const mealName = mealNameInput.value;
      const calories = caloriesInput.value;
  
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = `${mealName} - ${calories} calories`;
  
      // Add the new item to the records list
      recordsList.appendChild(listItem);
  
      // Clear the form inputs
      mealNameInput.value = '';
      caloriesInput.value = '';
    });
  
    exerciseForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
  
      // Get the input values
      const exerciseNameInput = document.getElementById('exercise-name');
      const durationInput = document.getElementById('duration');
      const notesInput = document.getElementById('notes');
      const exerciseName = exerciseNameInput.value;
      const duration = durationInput.value;
      const notes = notesInput.value;
      const selectedDate = new Date();
  
      // Create a new table row
      const tableRow = document.createElement('tr');
  
      // Create table data elements
      const dateData = document.createElement('td');
      const exerciseData = document.createElement('td');
      const durationData = document.createElement('td');
      const notesData = document.createElement('td');
  
      // Set the text content
      dateData.textContent = selectedDate.toLocaleDateString();
      exerciseData.textContent = exerciseName;
      durationData.textContent = duration;
      notesData.textContent = notes;
  
      // Append table data to the table row
      tableRow.appendChild(dateData);
      tableRow.appendChild(exerciseData);
      tableRow.appendChild(durationData);
      tableRow.appendChild(notesData);
  
      // Append the table row to the exercise calendar body
      exerciseCalendarBody.appendChild(tableRow);
  
      // Clear the form inputs
      exerciseNameInput.value = '';
      durationInput.value = '';
      notesInput.value = '';
    });
});
