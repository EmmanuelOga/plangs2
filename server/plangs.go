package main

import (
	// "github.com/k0kubun/pp/v3"
	"github.com/tidwall/gjson"
)

func plCssId(pl gjson.Result) string {
	return pl.Get("vid").String()
}

func plName(pl gjson.Result) string {
	return pl.Get("name").String()
}

func plLogo(pl gjson.Result) gjson.Result {
	return pl.Get(`images.#(kind=="logo")`)
}

func plHomepage(pl gjson.Result) gjson.Result {
	return pl.Get(`websites.#(kind=="homepage")`)
}

func plWikipedia(pl gjson.Result) gjson.Result {
	return pl.Get(`websites.#(kind=="wikipedia")`)
}

func plHasWikipage(pl gjson.Result) string {
	if plWikipedia(pl).Exists() {
		return "1"
	}
	return "0"
}

func plHasHomepage(pl gjson.Result) string {
	if plHomepage(pl).Exists() {
		return "1"
	}
	return "0"
}
