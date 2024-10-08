import OpenAI from "openai";
const openai = new OpenAI();

import schema from "@plangs/plangs/schemas/NPlangData.json";

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "You are a programming languages expert." },
    {
      role: "user",
      content: [
        "Describe the programming language found at https://gleam.run/.",
        "Try to fill as many items of the NPlangData schema as possible.",
      ].join("\n"),
    },
  ],
  response_format: {
    type: "json_schema",
    json_schema: {
      name: "NPlangData",
      description: "https://plangs.page programming language data",
      schema: schema,
      // strict: true, // Strict is "too strict" ... we need human review on the output anyway.
    },
  },
});

console.log(JSON.stringify(JSON.parse(completion.choices[0].message.content ?? "{}"), null, 2));
