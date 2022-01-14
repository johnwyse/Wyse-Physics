// Hide and show pages
function showPage(page) {
  document.querySelectorAll('.page').forEach(div => {
    div.style.display = 'none';
  })
  document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    
    // Show page when nav-bar button is clicked
    document.querySelectorAll('button.pagelink').forEach(button => {
      button.onclick = function() {
        showPage(this.dataset.page);
      } 
    })
    
    // Force

    //Force Calculator
    document.querySelector('#calculate_force').addEventListener('click', function()
    {
        let mass = parseFloat(document.querySelector('#force_mass').value);
        let acceleration = parseFloat(document.querySelector('#acc').value);
        let force = mass*acceleration;

        // Check if user input text instead of numbers, print answer
        if ((isNaN(force)) == true)
        {
            document.querySelector("#force_answer").innerHTML = "Please enter only numbers";
        }
        else
        {
            document.querySelector("#force_answer").innerHTML = "The force is " + force + " N";
        }
    });

    // Generate new force problem
    document.querySelector('#generate_force').addEventListener('click', function()
    {
        document.querySelector('#student_force_answer').style.display = 'inline-block';
        document.querySelector('#force_unit').style.display = 'inline-block';
        document.querySelector('#check_force').style.display = 'inline-block';
        
        // Reset feedback styling
        document.querySelector('#force_feedback').innerHTML = "";
        document.querySelector('#student_force_answer').style.backgroundColor = 'white';
        document.querySelector('#student_force_answer').value = "";

        // Create random integers between 3 and 12 for the problem
        let random_mass = Math.floor(Math.random() * 10) + 3;
        let random_acc = Math.floor(Math.random() * 10) + 3;

        // Print new problem for user
        document.querySelector("#force_problem").innerHTML = "What is the force applied on a " + random_mass + " kg cart that moves forward at a rate of " + random_acc + " m/s/s?";

        // Check answer when user submits
        document.querySelector('#check_force').addEventListener('click', function()
        {
            let answer = random_mass*random_acc;
            let student_answer = parseFloat(document.querySelector('#student_force_answer').value);

            if ((isNaN(student_answer)) == true)
            {
                document.querySelector('#force_feedback').innerHTML = "Your answer should contain only numbers";
            }
            else if (student_answer == answer)
            {
                document.querySelector('#force_feedback').innerHTML = "Correct! Nice work.";
                document.querySelector('#student_force_answer').style.backgroundColor = 'green';
            }
            else
            {
                document.querySelector('#force_feedback').innerHTML = "Incorrect! Keep trying.";
                document.querySelector('#student_force_answer').style.backgroundColor = 'red';
            }
        });
    });

    // Acceleration

    // Calculate Acceleration
    document.querySelector('#calculate_acc').addEventListener('click', () =>
    {
        let time = parseFloat(document.querySelector('#time').value);
        let vi = parseFloat(document.querySelector('#vi').value);
        let vf = parseFloat(document.querySelector('#vf').value);
        let acc = (vf-vi)/time;
        acc = Number((acc).toFixed(2));
            
        // Check if user input text instead of numbers, print answer
        if ((isNaN(acc)) == true)
        {
            document.querySelector("#acc_answer").innerHTML = "Please enter only numbers";
        }
        else
        {
            document.querySelector("#acc_answer").innerHTML = "The acceleration is " + acc + " m/s/s";
        }
    });

    // Generate new acceleration problem
    document.querySelector('#generate_acc').addEventListener('click', function()
    {
        document.querySelector('#student_acc_answer').style.display = 'inline-block';
        document.querySelector('#acc_unit').style.display = 'inline-block';
        document.querySelector('#check_acc').style.display = 'inline-block';
        
        // Reset feedback styling
        document.querySelector('#acc_feedback').innerHTML = "";
        document.querySelector('#student_acc_answer').style.backgroundColor = 'white';
        document.querySelector('#student_acc_answer').value = "";

        // Create random integers between 3 and 12 for the problem
        let random_vi = Math.floor(Math.random() * 20) + 23;
        let random_vf = Math.floor(Math.random() * 20) + 43;
        let random_t = Math.floor(Math.random() * 10) + 3;

        // Print new problem for user
        document.querySelector("#acc_problem").innerHTML = "What is the acceleration of a motorcycle that speeds up from " + random_vi + " m/s to " + random_vf + " m/s in " + random_t + " seconds?";
        document.querySelector("#rounding").innerHTML = "Round to the hundredths place if necessary."

        // Check answer when user submits
        document.querySelector('#check_acc').addEventListener('click', function()
        {
            let answer = (random_vf-random_vi)/random_t;
            answer = Number((answer).toFixed(2));
            let student_answer = parseFloat(document.querySelector('#student_acc_answer').value);

            if ((isNaN(student_answer)) == true)
            {
                document.querySelector('#acc_feedback').innerHTML = "Your answer should contain only numbers";
            }
            else if (student_answer == answer)
            {
                document.querySelector('#acc_feedback').innerHTML = "Correct! Nice work.";
                document.querySelector('#student_acc_answer').style.backgroundColor = 'green';
            }
            else
            {
                document.querySelector('#acc_feedback').innerHTML = "Incorrect! Keep trying.";
                document.querySelector('#student_acc_answer').style.backgroundColor = 'red';
            }
        });
    });

    // Kinetic Energy

    // Calculate Kinetic Energy
    document.querySelector('#calculate_ke').addEventListener('click', function()
    {
        let mass = parseFloat(document.querySelector('#ke_mass').value);
        let velocity = parseFloat(document.querySelector('#vel').value);
        let ke = 0.5*mass*velocity*velocity;
            
        // Check if user input text instead of numbers, print answer
        if ((isNaN(ke)) == true)
        {
            document.querySelector("#ke_answer").innerHTML = "Please enter only numbers.";
        }
        else
        {
            document.querySelector("#ke_answer").innerHTML = "The object's kinetic energy is " + ke + " J";
        }
    });
        
    // Generate new kinetic energy problem
    document.querySelector('#generate_ke').addEventListener('click', function()
    {
        document.querySelector('#student_ke_answer').style.display = 'inline-block';
        document.querySelector('#ke_unit').style.display = 'inline-block';
        document.querySelector('#check_ke').style.display = 'inline-block';
        
        // Reset feedback styling
        document.querySelector('#ke_feedback').innerHTML = "";
        document.querySelector('#student_ke_answer').style.backgroundColor = 'white';
        document.querySelector('#student_ke_answer').value = "";

        // Create random integers between 3 and 12 for the problem
        let random_mass = Math.floor(Math.random() * 10) + 3;
        let random_vel = Math.floor(Math.random() * 10) + 3;

        // Print new problem for user
        document.querySelector("#ke_problem").innerHTML = "What is the kinetic energy of a " + random_mass + " kg boulder rolling down a hill at " + random_vel + " m/s?";

        // Check answer when user submits
        document.querySelector('#check_ke').addEventListener('click', function()
        {
            let answer = 0.5*random_mass*random_vel*random_vel;
            let student_answer = parseFloat(document.querySelector('#student_ke_answer').value);

            if ((isNaN(student_answer)) == true)
            {
                document.querySelector('#ke_feedback').innerHTML = "Your answer should contain only numbers";
            }
            else if (student_answer == answer)
            {
                document.querySelector('#ke_feedback').innerHTML = "Correct! Nice work.";
                document.querySelector('#student_ke_answer').style.backgroundColor = 'green';
            }
            else
            {
                document.querySelector('#ke_feedback').innerHTML = "Incorrect! Keep trying.";
                document.querySelector('#student_ke_answer').style.backgroundColor = 'red';
            }
        });
    });    
});