# Ducky
A simple full-stack web application that allows farmers to record duck feeding activities and scientists to track the activity

## Demo 
https://infinite-chamber-77743.herokuapp.com/

## Technology Stack
*Ducky* is built using MERN stack(MongoDB Express React NodeJS)

## Minimum Viable Product
  1. Allow farmer/s to register an account with Ducky
  2. Allow the farmer to Create, Read, Update, and Delete a feeding activity of the duck/s
  3. Allow the farmer to logout from Ducky
  4. Allow scientist/s to register an account with Ducky
  5. Allow the scientist to read feeding activities recorded by the farmer/s
  6. Allow the scientist to logout from Ducky
  
## Future Work
  1. Allow farmer/s to record feeding activity through an auto-record option
  2. Allow farmer/s to update the date and time of a recorded activity
  3. Allow farmer/s to search an activity 
  4. Allow scientit/s to search for an activity using country, farmer, and food type
  5. Allow scientist/s to import the actitivities to a PDF or Excel document
  
## Technical Considerations
  * Role Based Access Control approach to differentiate a farmer and a scientist to fetch activities
      a) A farmer can only view his/her activities
      b) A scientist can view all the activities of all the farmers
  * Data Model Design
       * Ducky's database is built using NoSQL DB for the following reasons
          a) Optimized querying
          b) No shcema/tructure data - flexibility to model data based on the requirements in the future
          c) Scales well horisontally and cost-effective
          d) To leverage the soft state and eventual consistency
      * Clients and Activities as two documents that contain information of farmers and scientists and feeding activity respectively
      * Normalized data model - Farmer in the Users will reference respective feeding activity in the Records document
          a) Normalized behavior is preferred over Embedded model 
              * To avoid the duplication of clients data
              * Allow complex many-to-many relationships in the future based on the requirements
   * User Interface Design
      * Ducky's UI is built using React JS library for the following reasons
        a) Widely used frameworks/libraries to build scalable and pleasant UI is the industry are Angular, React, Vue, Svelete
           and React is preferred due to the flux-architecture of one-directional data binding 
        b) React has a small learning curve but a large and activity community presence to improve the development experience
      * The state management of Ducky is handled using React Hooks i.e., useContext, useReducer, useState, and useEffect instead of
        Redux state management library as the application doesn't involve multi-level transactions and a limited moving parts i.e., managing the feeding activity
