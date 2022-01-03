# Getting Started with the Rectnngles Overlap project

1. clone the poject
2. run 'npm install' to install the packages/ libraries.
3. run 'npm run build' to build the project
4. run 'npm run serve to serve the project on http://localhost:8080/public

# Project flow 
 
1.user should enter a positive interger greater than 1 to indicate the number of rectangles to test for overlapping
2. The input fields for each rectangle is generated from the code 
3. It validates for positive integers to be entered in each rectagle input field
4. Once filled ,and ssubmitted, it creates coordinate point using class instance variables
5. It checks if the coordinates of the second rectagle is on top, right, bottom or left of the first rectangle then two rectangles do not overlap, else they overlap.
6. If the first two rectangles do not overlap, then the code exits with alert message and reloads the page else it remove the first rectangle and takes next two rectangle coordinates and repeats the process
7. If all rectangles overlap , then it alerts the user and reloads hthe page