import { Biome, Distribution } from "@biomejs/js-api";

const biomeInstance: Promise<Biome> = Biome.create({ distribution: Distribution.NODE }).then(async biome => {
  biome.applyConfiguration(JSON.parse(await Bun.file("biome.json").text()));
  return biome;
});

/**
 * Calls BiomeJS to reformat code.
 * The filePath is for reporting only and not usually necessary since we don't handle errors atm.
 */
export async function reformatCode(code: string, filePath = "filePath.ts"): Promise<string> {
  const biome = await biomeInstance;
  return biome.formatContent(code, { filePath }).content;
}
