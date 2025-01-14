# CDP Assistant Chatbot

## Objective
The CDP Assistant Chatbot is designed to help users answer "how-to" questions related to four major Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. It extracts relevant information from the official documentation of these platforms to provide accurate and actionable guidance.

## Core Functionalities

### Answer "How-to" Questions:
The chatbot assists users with queries about performing specific tasks or using features in each CDP.

#### Example Questions:
- "How do I set up a new source in Segment?"
- "How can I create a user profile in mParticle?"
- "How do I build an audience segment in Lytics?"
- "How can I integrate my data with Zeotap?"

### Extract Information from Documentation:
- The chatbot retrieves relevant content directly from the official documentation of each CDP.
- It navigates through documentation, identifies necessary sections, and extracts accurate steps.

### Handle Question Variations:
- Responds seamlessly to differently phrased questions and adjusts to the query's length and complexity.
- Identifies and filters out irrelevant questions (e.g., "Which movie is releasing this week?").

## Bonus Features

### Cross-CDP Comparisons:
- Compares functionalities and approaches across the four CDPs.
#### Example Question: 
- "How does Segment's audience creation process compare to Lytics'?"

### Advanced "How-to" Questions:
- Provides guidance on advanced configurations, integrations, or platform-specific use cases.

## Data Sources
The chatbot uses the official documentation from these platforms:
- **Segment:** [Segment Documentation](https://segment.com/docs)
- **mParticle:** [mParticle Documentation](https://docs.mparticle.com)
- **Lytics:** [Lytics Documentation](https://docs.lytics.com)
- **Zeotap:** [Zeotap Documentation](https://www.zeotap.com)

## Technologies Used
This repository contains a project written primarily in TypeScript, with additional usage of JavaScript, HTML, and CSS.


## Setup and Installation


1. **Clone the repository**:
   ```bash
   git clone https://github.com/heeren04/chatbotforCDP.git
2.**Navigate to the project directory**:
 ```bash
  cd chatbotforCDP
```
3.**Install Dependencies**:
 ```bash
 npm install
```
4.**Start the project**:
 ```bash
 npm sun dev
```

## Usage
- Open the chatbot interface.
- Type your question related to any of the four CDPs.
-  Receive an accurate and detailed response from the chatbot.

