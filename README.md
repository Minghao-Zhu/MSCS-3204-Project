# MSCS-3204-Project


Setup instructions
- install all dependencies
- Check the build with:
```npm run build```
- Start the development environment with:
```npm run dev```
- view locally http://localhost:3000
- view the deployed application on Vercel https://mscs-3204-project.vercel.app/


Project description
Relax. EDU is a performance-optimized web platform designed to support students' mental well-being as they navigate high-pressure academic environments. 
It serves as a platform for scheduling therapist appointments and centralizing mental health resources.

Features implemented
- User can register for a mental health profile.
- User can match with the therapist and schedule an appointment based on availability.
- User can read posts from the Resource board and post articles on the Resource board.
- User can view the appointment history, as well as modify/cancel the appointment.

Accessibility considerations
- label for icon
- alt text for photo
- high contrast color
- keyboard navigation

Known limitations
- Matching therapists are all mocked without actual machine learning algorithms since it requires too much domain-specific knowledge.
- The ‘Join Meeting’ button will lead the user to one of the team members' personal meeting rooms. It's not a real link for an actual appointment.
- When entering an email in the profile, there is no email validation step to make sure the user is actually using that email address.
- No actual databases in the backend are used. We use session storage to store the data for demo purposes.
- The completed appointments list in the view history page is not implemented yet. Since we use the same meeting link for all appointments, we can't keep track of completeness.

