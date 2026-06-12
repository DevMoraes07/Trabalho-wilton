'use server';
/**
 * @fileOverview A Genkit flow for generating professional engineering project descriptions from raw project data.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the engineering project.'),
  projectType: z.string().describe('The type of engineering project (e.g., structural analysis, bridge design, building construction).'),
  location: z.string().describe('The geographical location of the project.'),
  client: z.string().describe('The client for whom the project was completed.'),
  startDate: z.string().describe('The start date of the project (e.g., "January 2022").'),
  endDate: z.string().describe('The end date of the project (e.g., "December 2023").'),
  loads: z.string().describe('Detailed information about the loads considered in the design (e.g., dead loads, live loads, wind loads, seismic loads).'),
  materials: z.string().describe('Key materials used in the project, including their specifications (e.g., C30/37 concrete, S355 steel, glulam timber).'),
  designStandards: z.string().describe('Relevant design codes and standards applied to the project (e.g., Eurocodes, ASCE, ACI).'),
  softwareUsed: z.string().describe('Engineering software used for design, analysis, or modeling (e.g., SAP2000, ETABS, AutoCAD).'),
  challenges: z.string().describe('Major technical or logistical challenges encountered during the project and the innovative solutions implemented.'),
  timelineDescription: z.string().describe('A general description of the project timeline and key phases.'),
  scopeOfWork: z.string().describe('A brief but comprehensive description of the project\'s scope of work.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A professional, engineering-precise project description suitable for a portfolio.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const projectDescriptionPrompt = ai.definePrompt({
  name: 'projectDescriptionPrompt',
  input: { schema: GenerateProjectDescriptionInputSchema },
  output: { schema: GenerateProjectDescriptionOutputSchema },
  prompt: `As an expert in engineering portfolio content creation, your task is to generate a professional and highly engineering-precise project description based on the provided raw data. The description should be compelling, highlight technical challenges and solutions, and be suitable for an engineer's portfolio.

Project Name: {{{projectName}}}
Project Type: {{{projectType}}}
Location: {{{location}}}
Client: {{{client}}}
Start Date: {{{startDate}}}
End Date: {{{endDate}}}
Scope of Work: {{{scopeOfWork}}}
Loads Considered: {{{loads}}}
Materials Used: {{{materials}}}
Design Standards: {{{designStandards}}}
Software Used: {{{softwareUsed}}}
Challenges & Solutions: {{{challenges}}}
Timeline Description: {{{timelineDescription}}}

Craft a detailed and engaging project description, focusing on the technical aspects and Wilton's contribution/role if implied. Ensure the language is formal, precise, and reflective of high engineering standards.`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await projectDescriptionPrompt(input);
    return output!;
  }
);
