// main.ts
import { Select } from "https://deno.land/x/cliffy/prompt/select.ts";

async function projectA() {
  const response = await Select.prompt({
    message: "プロジェクトAで出力するタスクを選択してください",
    options: [
      { name: "タスクAのチケット作成", value: "a" },
      { name: "タスクAのURL生成", value: "b" },
    ],
    keys: {
      // Vimスタイルのキーバインドを設定
      next: ["j", "down"],
      previous: ["k", "up"],
    },
  });

  switch (response) {
    case "a":
      console.log("チケット生成しました");
      break;
    case "b":
      console.log("https://google.com");
      break;
    default:
      console.log("選択がキャンセルされました。");
      break;
  }
}

export default projectA;
