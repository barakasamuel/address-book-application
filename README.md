 Address Book with To-Do List
This is a simple web app where users can:

Add and view contacts in an Address Book.

Add, mark as done, and remove tasks in a To-Do List.

 Features
Address Book
Add new contacts with Name, Phone Number, Email, and Address.

Display contacts in a table dynamically.

To-Do List
Add new tasks easily.

Click a task to mark it as completed.

Right-click a task to delete it.

 Technologies Used
HTML5

CSS3

JavaScript (Vanilla)

 How to Set Up the Project
1. Clone the Repository
Open your terminal and run:

bash
Copy
Edit
git clone https://github.com/barakasamuel/address-book-application.git
(Replace your-username and your-repository-name with your actual GitHub info.)

2. Navigate into the project folder
bash
Copy
Edit
cd your-repository-name
3. Open the project
You can simply open the index.html file in your browser:

Right-click on index.html ➔ Open With ➔ Browser
or

Use Live Server if you're using VS Code.

 Test Cases

Feature	Test Description	Expected Result
Add Contact	Fill the form and click "Add Contact"	New contact appears in the list
Add Task	Type a task and click "Add Task"	New task appears under To-Do List
Mark Task Done	Click on a task item	Task text shows strike-through
Remove Task	Right-click on a task item	Task is removed from the list
 Project Structure
bash
Copy
Edit
/project-folder
├── index.html
├── styles/
│    └── styles.css
├── src/
│    └── script.js
└── README.md
 Future Improvements
Edit or delete contacts from the Address Book.

Save contacts and tasks to Local Storage.

Make UI mobile responsive.

Add task deadlines or priorities.

https://barakasamuel.github.io/address-book-application/