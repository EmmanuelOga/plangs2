import * as prettier from "prettier";

export async function reformatCode(code: string, filePath = "filePath.ts"): Promise<string> {
  return prettier.format(code, { parser: "typescript", filepath: filePath });
}
