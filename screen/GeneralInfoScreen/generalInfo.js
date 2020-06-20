import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth } from "../../HOC/auth";
const GeneralInfo = () => {
  const { signIn } = useContext(Auth);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "flex-end",
          marginLeft: 10,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "600" }}>
          General Information
        </Text>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text>
            1. 1. Customer involvement; 2. Maintain simplicity; 3. Incremental
            delivery; 4. Embrace change; 5. People not process. 2. Requirement
            elicitation; Requirement analysis; Requirement validation;
            Requirement management 3. 1. Stakeholders don’t know what they
            really want; 2. Stakeholder express requirements in their own terms;
            3. Different stakeholders may have confliction requirements; 4.
            Organizational and political factors may influence the system
            requirements; 5. The requirement change during the analysis process
            and at that time new stakeholders may emerge changing the business
            environment 4. As software requirements document is the official
            statement of what is required of the system developers, the manager
            use it to plan a bid for the system and to plan the system
            development process and the engineers use it to understand what is
            to be developed, understand the relationship between parts and to
            develop validation test for the system 5. 1. Problem analysis and
            change specification; 2. Change analysis and costing; 3. Change
            implementation 6. 1. Test-first development; 2. Refactoring; 3.
            Paired Programming 7. 1. Product requirement; 2. Organizational
            requirement; 3. External requirements 8. Use case is a high level
            graphical model that identifies the actors in an interaction and
            describe all possible interactions with the system. 9. Scum sprint
            is a fixed time period usually 2-4 week iterative development cycle
            where a scrum team sets to complete their work pulled from the
            requirements of the product backlog 10. This is because scrum agile
            method focuses on managing iterative development rather that
            specific agile practices and has only three phases 11. 1.
            Requirement elicitation; 2. Requirement analysis; 3. Requirement
            validation; 4. Requirement management 12. 1.Incremental planning; 2.
            Small releases; 3. Simple design; 4. Test-first development; 5.
            Refactoring; 6. Pair programming; 7. Collective ownership; 8.
            Continuous integration; 9. Sustainable pace; 10. On-site customer
            13. 1. Lack of clarity; 2. Continual reliance on legacy methods; 3.
            Inadequate experience with agile; 4. Lack of testing strategies; 5.
            Lack of collaboration in team composed by different companies. 14.
            1.Some test can be hard to write especially using a complex
            interface; 2. The programmer may not make sufficient test and take
            shortcuts that may not check for all the exceptions that could occur
            15. Ethnography is an observable technique that can be used to
            understand social and organization requirements. It helps analysts
            discover implicit system requirements that reflect the actual rather
            the formal processes in which people are involved 16. 1. Small and
            medium sized software product development; 2. Custom software
            development in an organization where there is a clear commitment
            from the customer to become involved in the development process and
            where there are few external rules and regulations that affect the
            software. 17. 1. Project management process that encourages frequent
            inspection and adaptation; 2. Leadership philosophy that encourages
            teamwork, self-organization and accountability; 3. Development
            practice that allow for rapid delivery of high quality software; 4.
            Business approach that aligns development with customer needs and
            company goals. 18. 1. Requirements reviews; 2. Prototyping; 3.
            Test-case generation 19. 1. Customer involvement; 2. Incremental
            delivery; 3. People not process; 4. Maintain simplicity; 5. Embrace
            change 20. User requirements are natural languages plus diagrams of
            the services the system provides and it operational constraints
            written for the customer System requirement is a structured document
            setting out detailed descriptions of the system’s functions,
            services and operational constraints 21. 1. What type of system is
            being developed; 2. Is an incremental delivery strategy realistic;
            3. How is the development team organized; 4. Is the system subject
            to external regulations; 5. How large is the system that is being
            developed; 6. What is the expected system lifetime 22. Functional
            requirements deal with the technical services to be provided and the
            non-functional requirements deals with the constraints on the
            services or functions
          </Text>
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => signIn()}
          style={{
            marginHorizontal: 30,
            height: 40,
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 11, fontWeight: "500" }}>
            Lets get started ...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GeneralInfo;
