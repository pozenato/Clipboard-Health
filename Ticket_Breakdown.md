# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

*** Ticket #1 ***

#Sumary
Add Custon ID on Agent Model 

#Issue Type
Story

#Status
Open

#Environment 
Production

#Description
As a customer, I would like to use my own ID to generate a new report.
This ID must be used as an external unique identifier to be informed by customers
and to be saved with a unique foreign key. For such;
 * We need to add a new parameter in the table: Agents, called: custom_id 
to allow this parameter to be used by customers to inform their own ID and
thus be used as an external ID when generating a new report.
 * we must modify the function; 'getShiftsByFacility' function to include custom_id
in the metadata returned for each Shift.
 * You must modify the 'generateReport' function to use the custom_id instead of the
internal database id when generating reports for Facilities.

#Implementation Details
 * Add the custom_id field to the Agent table.
 * Validate if custom_id is unique and not null in the Agent table.
 * Update the query in getShiftsByFacility function to include the custom_id
field in the returned metadata for each Shift.
 * Modify the generateReport function to use the custom_id instead of the internal
database id when generating reports for Facilities.

#Acceptance Criteria
 * custom_id should be created on Agent Table.
 * custom_id should be unique on Agent Table.
 * custom_id field should be returned metadata for each Shift.
 * custom_id field should be used as an identity unique instead of the internal database
id when generating reports for Facilities.
 * The unit test should be implemented to validate the items above.
 * The documentation of the model and that API should be updated to include that new parameter 
 
#story points
3-5 points



*** Ticket #2 ***

#Sumary
Add Agent Custom IDs on Facility Model 

#Issue Type
Story

#Status
Open

#Environment 
Production

#Description
As a developer, I would like to be able to associate the IDs entered by the user
(and saved in the Agents table, like: custom_id) with the table: Facility. This way,
the 'custom_id' would associate (as a foreign key) with the Facility table through the
field: agent_custom_ids to be created in the database.
For that, we must:
 * Add a new field called agent_custom_ids to the Facility table;
 * modify the 'generateReport' function to use the 'custom_ids' stored in 
agent_custom_ids' instead of the internal database id when generating reports for Facilities.

#Implementation Details
 * Add the agent_custom_ids field to the Facility table.
 * Modify the Facility edit page to allow Facilities to add custom ids for their Agents.
 * Modify generateReport function to use the custom ids stored in agent_custom_ids instead
of the internal database id when generating reports for Facilities.

#Acceptance Criteria
 * agent_custom_ids should be created on Facility Table.
 * custom_ids should be related to agent_custom_ids like a foreign key linked to both
tables and that parameter should be used instead of the internal database id when generating reports for Facilities
 * The unit test should be implemented to validate the items above.
 * The documentation of the model and that API should be updated to include that new parameter 
 
#story points
1-2 points


*** Ticket #3 ***

#Sumary
Update the User Interface to use Custom IDs 

#Issue Type
Story

#Status
Open

#Environment 
Production

#Description
As a user, I would like to be able to add my own Agent Ids to be used as unique identifiers
when generating my Facility reports. To do so, I need the Shifts page to be changed and this
new field to be added so that I can insert my Ids to be used in the future.
So, I need that:
 * In the UI for the Shifts page, a new field (text type) must be included so that I can inform my custom Id.
 * In the UI for the Facility edit page, a new field must be added to show the user what was thevalue
of the custom ID that was informed previously in the Shifts screen, and with that, it will be possible to relate both

#Implementation Details
 * Modify the Shifts page to display the custom id of each Agent.
 * Modify the Facility edit page to display the custom ids of Agents.

#Acceptance Criteria
 * Custom ID filed should be displayd on the Shifts page.
 * Custom ID filed should be displayd on the Facility page
 * The unit test should be implemented to validate the items above.
 * The documentation of the model and that API should be updated to include that new parameter 
 
#story points
1-2 points