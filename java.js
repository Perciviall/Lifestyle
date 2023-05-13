// JavaScript code

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const calorieForm = document.getElementById('calorie-form');
  const exerciseForm = document.getElementById('exercise-form');
  const recordsList = document.getElementById('records-list');
  const exerciseCalendar = document.getElementById('exercise-calendar');

  // Load existing calorie records from local storage
  loadCalorieRecords();

  // Load existing exercise data from local storage
  loadExerciseData();

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

    // Save the calorie record to local storage
    saveCalorieRecord(mealName, calories);

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

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${exerciseName} (${duration} min)`;

    // Add notes if available
    if (notes) {
      const notesElement = document.createElement('p');
      notesElement.textContent = `Notes: ${notes}`;
      listItem.appendChild(notesElement);
    }

    // Get the selected date from the exercise form
    const selectedDate = document.getElementById('exercise-date').value;

    // Save the exercise data to local storage
    saveExerciseData(selectedDate, exerciseName, duration, notes);

    // Clear the form inputs
    exerciseNameInput.value = '';
    durationInput.value = '';
    notesInput.value = '';
  });

  // Function to load existing calorie records from local storage
  function loadCalorieRecords() {
    const records = JSON.parse(localStorage.getItem('calorieRecords')) || [];

    records.forEach((record) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${record.mealName} - ${record.calories} calories`;
      recordsList.appendChild(listItem);
    });
  }

  // Function to save calorie record to local storage
  function saveCalorieRecord(mealName, calories) {
    const record = {
      mealName,
      calories,
    };

    const records = JSON.parse(localStorage.getItem('calorieRecords')) || [];
    records.push(record);

    localStorage.setItem('calorieRecords', JSON.stringify(records));
  }

  // Function to load existing exercise data from local storage
  function loadExerciseData() {
    const exerciseData = JSON.parse(localStorage.getItem('exerciseData')) || {};

    Object.keys(exerciseData).forEach((date) => {
      const exercises = exerciseData[date];

      exercises.forEach((exercise) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${date} - ${exercise.exerciseName} (${        exercise.duration} min)`;

        if (exercise.notes) {
          const notesElement = document.createElement('p');
          notesElement.textContent = `Notes: ${exercise.notes}`;
          listItem.appendChild(notesElement);
        }

        // Append the list item to the exercise calendar
        exerciseCalendar.appendChild(listItem);
      });
    });
  }

  // Function to save exercise data to local storage
  function saveExerciseData(date, exerciseName, duration, notes) {
    const exerciseData = JSON.parse(localStorage.getItem('exerciseData')) || {};

    if (!exerciseData[date]) {
      exerciseData[date] = [];
    }

    exerciseData[date].push({
      exerciseName,
      duration,
      notes,
    });

    localStorage.setItem('exerciseData', JSON.stringify(exerciseData));
  }
});
