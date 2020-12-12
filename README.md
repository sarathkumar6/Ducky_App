# Ducky
A simple full-stack web application that allows farmers to record duck feeding activities and scientists to track the activity

## Demo 
https://infinite-chamber-77743.herokuapp.com/

## Technology Stack
*Ducky* is built using MERN stack(MongoDB Express React NodeJS)

## Minimum Viable Product
  1. Allow a farmer to register an account with Ducky
  2. Allow the farmer to Create, Read, Update, and Delete a feeding activity of the duck/s
  3. Allow the farmer to logout from Ducky
  4. Allow a scientist to register an account with Ducky
  5. Allow the scientist to read feeding activities recorded by the farmer/s
  6. Allow the scientist to logout from Ducky
  
## Technical Considerations
  * Role Based Access Control approach to differentiate a farmer and a scientist
  * Data Model Design
      * Ducky is build using NoSQL database for the following reasons
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
      * The state management of Ducky is handled using React Hooks i.e., useContext, useReducer, useState, and useEffect instead of
        Redux state management library as the application doesn't involve multi-level transactions and a limited moving parts i.e., managing the feeding activity
