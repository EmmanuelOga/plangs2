package main

import (
	"sort"
	"strings"

	"github.com/tidwall/gjson"
)

func sortArray(array gjson.Result) []gjson.Result {
	sorted := make([]gjson.Result, 0)

	array.ForEach(
		func(key gjson.Result, value gjson.Result) bool {
			sorted = append(sorted, value)

			return true
		})

	sort.Slice(sorted, func(i, j int) bool {
		a := strings.ToLower(sorted[i].Get("name").String())
		b := strings.ToLower(sorted[j].Get("name").String())
		return a < b
	})

	return sorted
}
