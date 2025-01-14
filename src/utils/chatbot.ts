import { CDPs } from '../types';

export function generateResponse(question: string): string {
  // Normalize the question
  const normalizedQuestion = question.toLowerCase();

  // Check if the question is CDP-related
  const isCDPRelated = CDPs.some(cdp => 
    normalizedQuestion.includes(cdp.name.toLowerCase()) ||
    normalizedQuestion.includes('cdp') ||
    normalizedQuestion.includes('customer data platform')
  );

  if (!isCDPRelated) {
    return "I can only answer questions related to Customer Data Platforms (CDPs) like Segment, mParticle, Lytics, and Zeotap. Please ask me something about these platforms!";
  }

  // Simple response generation based on keywords
  if (normalizedQuestion.includes('segment')) {
    if (normalizedQuestion.includes('source') || normalizedQuestion.includes('setup')) {
      return `To set up a new source in Segment:
1. Log in to your Segment workspace
2. Navigate to Sources > Add Source
3. Choose your source type from the catalog
4. Follow the configuration steps for your specific source
5. Save and verify the connection

For detailed instructions, visit: ${CDPs[0].docsUrl}`;
    }
  }

  if (normalizedQuestion.includes('mparticle')) {
    if (normalizedQuestion.includes('profile') || normalizedQuestion.includes('user')) {
      return `To create a user profile in mParticle:
1. Access your mParticle dashboard
2. Navigate to the User Profiles section
3. Configure identity mapping
4. Set up user attributes
5. Define user events and behaviors

For more information, check: ${CDPs[1].docsUrl}`;
    }
  }

  if (normalizedQuestion.includes('lytics')) {
    if (normalizedQuestion.includes('audience') || normalizedQuestion.includes('segment')) {
      return `To build an audience segment in Lytics:
1. Go to Audiences in your Lytics dashboard
2. Click "Create New Audience"
3. Define your audience criteria
4. Set behavioral rules and filters
5. Save and activate your audience

Learn more at: ${CDPs[2].docsUrl}`;
    }
  }

  if (normalizedQuestion.includes('zeotap')) {
    if (normalizedQuestion.includes('integrate') || normalizedQuestion.includes('data')) {
      return `To integrate your data with Zeotap:
1. Access your Zeotap account
2. Go to Data Integration section
3. Choose your data source type
4. Configure the integration settings
5. Validate and test the connection

For detailed steps, visit: ${CDPs[3].docsUrl}`;
    }
  }

  // Compare CDPs
  if (normalizedQuestion.includes('compare') || normalizedQuestion.includes('difference')) {
    return `Each CDP has its unique strengths:

- Segment: Known for its extensive integration ecosystem and real-time event processing
- mParticle: Excels in mobile-first data collection and identity resolution
- Lytics: Strong in AI-powered customer insights and predictive modeling
- Zeotap: Focuses on deterministic identity resolution and compliance

For specific feature comparisons, please check each platform's documentation:
${CDPs.map(cdp => `- ${cdp.name}: ${cdp.docsUrl}`).join('\n')}`;
  }

  return `I understand you're asking about CDPs, but could you please be more specific? You can ask me about:
- Setting up sources/integrations
- Creating user profiles
- Building audience segments
- Platform-specific features
- Comparing different CDPs`;
}