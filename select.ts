// main.ts
import { Select } from "https://deno.land/x/cliffy/prompt/select.ts";

async function main() {
  const response = await Select.prompt({
    message: "選択してください",
    options: [
      { name: "Aについて", value: "a" },
      { name: "Bについて", value: "b" },
    ],
    keys: {
      // Vimスタイルのキーバインドを設定
      next: ["j", "down"],
      previous: ["k", "up"],
    },
  });

  switch (response) {
    case "a":
      console.log("Aについての情報を表示します。");
      break;
    case "b":
      console.log("Bについての情報を表示します。");
      break;
    default:
      console.log("選択がキャンセルされました。");
      break;
  }
}

main();

