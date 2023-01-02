# Differential Diagnosis

This is a full-stack web application in progress dedicated to providing stories, questions, and additional study materials for naturopathic medical students. Prospective users will create an account, submit payment information for monthly access, and have complete access to the material. Each story will render based off of diagnosis category. You will be able to hover over the fill-in-the-blank sentences included in the story, and be able to select from a multiple choice option menu. 

## Current Preview

<img src="./assets/gifs/ddXCasebookHD.gif" /><br />
<i>** As of 1/2/2023 **</i>

## Technology Stack Proposed
<b>Front-End:</b> React.js, TailwindCSS <br/>
<b>Back-End:</b> Next.js, Striped.js, Express.js, MongoDB, Amazon EC2 <br />
<b>Hosting:</b> Google Domains OR Amazon Route 53

## User Stories
As a user, I want to be able to...
- Access all existing content and receive notifications when new content becomes available.
- Interact with all of the Differntial Diagnosis content by topic via reading stories, fill-in-the-blank questions, multiple choice questions, or flash cards.
- Render each story as 'complete' when the story has been read, every question has been answered, and every flash card has been reviewed.
- Track my progress with current material and cumulative material based on how much material has been completed.
- Have confidence that my personal information is secure.
<br />

As an administrator, I want to be able to...
- Add, edit, and delete stories from the convenience of a minimal, straightforward dashboard.
- Add, edit, and delete questions from each story from the dashboard.
- Connect and collect payment authorization using a third-party provider, such as Striped.js.
- Integrate user authorization and manage user database efficiently.