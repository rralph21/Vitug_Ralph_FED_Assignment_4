# Breakpoint 1
what does break 1 do:
pauses after the form is submitted and before any validation starts.

Description of what changed:
The form checks if the name box is exmpty, shows "Please enter your name" because it was empty. valid = false.

# Breakpoint 2
What does break 2 do:
validate the email using the expression pattern.

Description of what changed:
shows "Enter a valid email" after failing validation.
# Breakpoint 3:
what does break 3 do:
checks the dropdown

description of what changed:
shows "Please choose one option" as the "valid" is set to false

# Critical state analysis

What does this state tell you about the program's logic.
    The code checks every field one by one. If any field is empty or wrong, it shows an error message and stops the form from being submitted.

Is the program behaving as expected at this point? why or why not?
    The program is behaving as expected because the form correctly shows error and blocks submission if filled out incorrectly.

if applicable, explain how this state connects to the programs next steps
    After validation is completed, "valid" sets a boolean value of true or false. true if it meets the condition and continues with the form submission, false if it doesnt meet the conditions and shows error messages.