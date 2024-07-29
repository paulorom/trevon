// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default async function main() {
  // Non-streaming:
  const completion = await openai.chat.completions.create({
    model: 'gpt-4-0125-preview',
    messages: [{ role: 'user', content: 'o que aconteceu com o mundo por causa da Covid?' }],
  });
  console.log(completion.choices[0]?.message?.content);

  // Streaming:
  // const stream = await openai.chat.completions.create({
  //   model: 'gpt-4',
  //   messages: [{ role: 'user', content: 'Say this is a test , bla' }],
  //   stream: true,
  // });
  // for await (const part of stream) {
  //   process.stdout.write(part.choices[0]?.delta?.content || '');
  // }
  process.stdout.write('\n');
}

main();