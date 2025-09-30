
import { classifyPrompt } from "@/lib/gemini/classification.agent";
import { generateDiagram } from "@/lib/gemini/generator.agent";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Get the user's prompt
    const body = await request.json();
    const userPrompt = body.prompt;
    if (!userPrompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    // == Agent Chain Step 1: Classification ==
    const classification = await classifyPrompt(userPrompt);

    // == Agent Chain Step 2: Generation ==
    const generatedJsonString = await generateDiagram(userPrompt, classification);

    // == Agent Chain Step 3: Validation (Simple) ==
    let diagramObject;
    try {
      diagramObject = JSON.parse(generatedJsonString);
    } catch (e) {
      console.error("AI returned invalid JSON:", generatedJsonString);
      throw new Error("The AI failed to generate a valid diagram structure. Please try again.");
    }

    // 4. Return the final, validated diagram object
    return NextResponse.json(diagramObject);

  } catch (error) {
    console.error("Error in generate-diagram API route:", error);
    return NextResponse.json(
      { error: error.message || "An internal server error occurred." },
      { status: 500 }
    );
  }
}
