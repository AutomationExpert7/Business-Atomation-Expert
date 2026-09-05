export interface Testimonial {
  tags: string[]
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    tags: ["Process Automation", "Workflow Automation", "CRM Automation"],
    quote:
      "Yall are wizards. I can't believe you were able to do what you did. I'm impressed!",
    name: "Richard Wilkinson",
    role: "Founder / President",
  },
  {
    tags: ["Process Automation", "Zap", "Workflow Automation"],
    quote:
      "Matt and his team did a great job getting a Zap working for me. Productivity and time improvement. Thanks, team! highly recommend Matt and I will be back again soon.",
    name: "Tony Cardinali",
    role: "Producing Branch Manager",
  },
  {
    tags: ["Process Automation", "Workflow Automation", "CRM Automation"],
    quote:
      "I am extremely pleased with the work that Matt and the Business Automation Expert team has done for our company. They have delivered exactly what we asked for and more and have been extremely professional. I could not recommend them more highly.",
    name: "Stephanie Kessel",
    role: "Co-Founder",
  },
  {
    tags: ["Process Automation", "Workflow Automation", "CRM Automation"],
    quote:
      "We have found Matt and the Business Automation Expert team to be incredibly professional, knowledgeable and responsive. We are so excited to see what we can work on next!",
    name: "Traci Parker",
    role: "Owner",
  },
  {
    tags: ["Process Automation", "Marketing", "Workflow Automation"],
    quote:
      "I'm the owner of a Marketing Agency serving many clients in a variety of different industries across the country and my growth came to a point where I needed to outsource specific tasks that required a high level of skill of Business Automation Expert.",
    name: "Jenna Chouinard",
    role: "Owner",
  },
  {
    tags: ["Process Automation", "Zap", "Workflow Automation"],
    quote:
      "Amazing work from Matt and his team. I was over my head with some integrations between Mailchimp and Kajabi, and Matt's team crushed it with best practices, detailed documentation, and moving forward. Professional, highly skilled and very knowledgeable.",
    name: "Patrick McCarty",
    role: "Owner",
  },
]