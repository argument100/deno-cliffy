// main.ts
import { Input } from "https://deno.land/x/cliffy/prompt/input.ts";

async function main() {
  const name = await Input.prompt("あなたの名前は何ですか？");

  console.log(`こんにちは、${name}さん！`);
}

main();
