// main.ts
import{ Select }from "https://deno.land/x/cliffy/prompt/select.ts";
import projectA from "./project-a.ts";
import projectB from "./project-b.ts";

async function main() {
  const response = await Select.prompt({
    message: "選択してください",
    options: [
      { name: "プロジェクトAについて", value: "a" },
      { name: "プロジェクトBについて", value: "b" },
    ],
    keys: {
      // Vimスタイルのキーバインドを設定
      next: ["j", "down"],
      previous: ["k", "up"],
    },
  });

  switch (response) {
    case "a":
      projectA();
      break;
    case "b":
      projectB();
      break;
    default:
      console.log("選択がキャンセルされました。");
      break;
  }
}

main();

