$(document).ready(function() {
    // Handle the form submission
    $('#addTaskForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the value of the new task
        var newTask = $('#taskInput').val();

        // Check if the input is not empty
        if (newTask.trim() !== '') {
            // Add the new task to the list
            $('#taskList').append('<li>' + newTask + '<button class="delete">Delete</button></li>');

            // Clear the input field
            $('#taskInput').val('');
        }
    });

    // Handle the delete button click
    $('#taskList').on('click', '.delete', function() {
        $(this).parent('li').remove(); // Remove the task from the list
    });
});