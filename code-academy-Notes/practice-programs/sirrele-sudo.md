POST: Remote method that accepts (existingStudentId, studentIdToMerge)


Update schema of student with the propert_mergedStudent


Get the phone number for both students () // make this a user handler method


// This is okay since the only information that is needed to get any additional documents is the studentId other than their number


Hard delete the user and student documents for the studentToMerge


Set the existingStudents phone number to the otherNumber property


Update the existing students number with the number of the studentToMerge


Get the conversations from the studentToMerge


Duplicate the conversation while updating the studentId with the existingsStudentId


Return meaningful response to send to the client: "The # has been added to the existing student! The pervious number can be found in the student's profile"