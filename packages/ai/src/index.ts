import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "You are a programming languages expert." },
    {
      role: "user",
      content:
        "Describe the programming language found at https://gleam.run/. " +
        "Find keywords and features, expressed as bullet points like: " +
        "'* Type System: weak, strong, etc'." +
        "Provide this classification for the following aspects: " +
        "Type System, License, Platforms (Windows, Android, Linux, etc), Paradigms, Tags, Influenced By, Influenced, Written In",
    },
  ],
});

console.log(completion.choices[0].message.content);
