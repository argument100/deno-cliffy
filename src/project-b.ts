// main.ts
import { Select } from "https://deno.land/x/cliffy/prompt/select.ts";

async function projectB() {
  const response = await Select.prompt({
    message: "プロジェクトBで出力するタスクを選択してください",
    options: [
      { name: "タスクBのチケット作成", value: "a" },
      { name: "タスクBのURL生成", value: "b" },
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

export default projectB;
