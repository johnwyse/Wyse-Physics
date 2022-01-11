document.addEventListener("DOMContentLoaded", function()
{
    
    
    // Force
    document.querySelector('#calculate').addEventListener('click', function()
    {
        let mass = parseFloat(document.querySelector('#mass').value);
        let acceleration = parseFloat(document.querySelector('#acc').value);
        let force = mass*acceleration;

        // Check if user input text instead of numbers, print answer
        if ((isNaN(force)) == true)
        {
            document.querySelector("#calc_answer").innerHTML = "Please enter only numbers";
        }
        else
        {
            document.querySelector("#calc_answer").innerHTML = "The force is " + force + " N";
        }
    });

    // Generate new problem
    document.querySelector('#generate').addEventListener('click', function()
    {
        // Reset feedback styling
        document.querySelector('#feedback').innerHTML = "";
        document.querySelector('#student_answer').style.backgroundColor = 'white';
        document.querySelector('#student_answer').value = "";

        // Create random integers between 3 and 12 for the problem
        let random_mass = Math.floor(Math.random() * 10) + 3;
        let random_acc = Math.floor(Math.random() * 10) + 3;

        // Print new problem for user
        document.querySelector("#problem").innerHTML = "What is the force applied on a " + random_mass + " kg cart that moves forward at a rate of " + random_acc + " m/s/s?";

        // Check answer when user submits
        document.querySelector('#check').addEventListener('click', function()
        {
            let answer = random_mass*random_acc;
            let student_answer = parseFloat(document.querySelector('#student_answer').value);

            if ((isNaN(student_answer)) == true)
            {
                document.querySelector('#feedback').innerHTML = "Your answer should contain only numbers";
            }
            else if (student_answer == answer)
            {
                document.querySelector('#feedback').innerHTML = "Correct! Nice work.";
                document.querySelector('#student_answer').style.backgroundColor = 'green';
            }
            else
            {
                document.querySelector('#feedback').innerHTML = "Incorrect! Keep trying.";
                document.querySelector('#student_answer').style.backgroundColor = 'red';
            }
        });
    });
});