# Visual Builder Application 
Front End application to support a Oracle Blockchain platform, developed to accommodate the structure of the Standard Numbering System (SNS). The SNS is used in this specification as a method to describe the functional and/or physical breakdown of items of the Product. Oracle Blockchain platform stores the definitions for the systems and subsystems, which relate to systems and subsystems, for Air Vehicle, Engines and Equipment (AVEE).  

## International Specification for the Procurement and Production of Technical Publications: S1000D 
S1000D is an international specification for the production of technical publications. Although the title emphasizes its use for technical publications, application of the specification to non-technical publications is also possible and can be very beneficial to businesses requiring processes and controls. This specification was initially developed by the Aerospace, Security and Defence Industries Association of Europe (ASD).  Currently, S1000D is jointly produced by the following organizations, their members, and customers:
- ASD
- Aerospace Industries Association of America (AIA)
- ATA e-Business Program 

### Air vehicle, engines and equipment SNS 
The coding and definitions for the AVEE SNS is appropriate for common and system level information for all Products. This AVEE SNS is divided into 72 main systems. Each System is characterised by a titles and a definition and also comprised by many subsystems. Each Subsystem is also defined by its title and a description. Finaly a subsystem is also comprised by one or many components. 
![Screenshot 2024-03-25 at 11 24 48](https://github.com/johnkarasoulos/aircraftBlockchain/assets/25766024/a950297c-6b07-4aaa-9e4d-9d50eae07326)


## Frontend Visual Builder Web Application "aircraftBlockchain"
Oracle Visual Builder application "aircraftBlockchain", has been implemented as the front end interface for an Oracle Blockchain platform. The proposed functionality includes: 
- list of all systems/subsystems/components,
- Create a new aircraft into Oracle BlockChain
- Create a new system linked to an aircraft
- Create a new subsystem linked to a system
- Create a component that can be linked to one or many subsystems.

### Frontend Visual Builder Web Application configuration
A new Backend server needs to be creared with the URL fo the rest proxy created by Oracle Blockchain plaform, e.g. https://xxxxxxxxxxxxxblockchain.ocp.oraclecloud.com:7443/restproxy/api/v2/channels/xxxxxxxxx 
![Screenshot 2024-03-25 at 11 31 45](https://github.com/johnkarasoulos/aircraftBlockchain/assets/25766024/2ff3af94-c1f4-450a-aa30-3668fd8d567d)
Moreover the following configuration variables need to be updated inside Visual Builder application in order for the Rest End Points to apply all the PST methods with the correct configuration: 
- BC-CHANNEL : "the channel of the blockchain"
- BC-ORG-ID : "Bloackchain organisation id"
- bc-user-id : "blockchain user id"
- bc-admin-user : "blockchain administrator user id" 
- bc-admin-user-password : "blockchain user password" 
- bc-token-id : "blockchain token id" 
- bc-timeout : "blockchain time out in milliseconds seconds"
- bc-sync : "blockchain synchronization" 
- bc-chaincode-name : "name of Oracle's blockchain code that is used" 

### From github repository to Oracle VisualBuilder application. 
1. Connect to your Oracle Visual Builder Studio Instance
2. Into an existing Project OR Create a new project --> create a new git repository by importing the existing public GitHub repository.
   ![Screenshot 2024-03-25 at 12 33 33](https://github.com/johnkarasoulos/aircraftBlockchain/assets/25766024/235cf9ae-c01f-449a-8764-96fdda1e543b)

4. Create a new Workspace using the button "Clone From Git" where you are selecting the Repository Name, the Branch , the Development Environment and you are providing the name of the Workspace Name.
   ![Screenshot 2024-03-25 at 12 37 06](https://github.com/johnkarasoulos/aircraftBlockchain/assets/25766024/5592e9b4-d1c1-44ba-ab37-364f87f06809)

6. You redirected to the new VisualBuilder instance assigned to this workspace and you can start working.  
 
