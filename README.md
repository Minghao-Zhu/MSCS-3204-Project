# MSCS-3204-Project

Start the development environment with:
npm run dev

Open http://localhost:3000 with your browser to see the result locally.

To view the deployed application on Vercel, simply go to the link https://mscs-3204-project.vercel.app/

Limitations
1. Matching therapists are all mocked without actual machine learning algorithms since it requires too much domain-specific knowledge.

2. The ‘Join Meeting’ button will lead the user to one of the team members' personal meeting rooms. It's not a real link for an actual appointment.

3. When entering an email in the profile, there is no email validation step to make sure the user is actually using that email address.

4. No actual databases in the backend are used. We use session storage to store the data for demo purposes.

5. The completed appointments list in the view history page is not implemented yet. Since we use the same meeting link for all appointments, we can't keep track of completeness.

