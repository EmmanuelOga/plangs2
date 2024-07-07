package main

import (
	"log"
	"net/http"
	"os"
	"sort"
	"strings"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/tidwall/gjson"
)

func loadPlangs() []gjson.Result {
	plangsJSON, err := os.ReadFile("static/plangs.json")
	if err != nil {
		log.Fatal(err)
	}

	plangs := make([]gjson.Result, 0)

	gjson.ParseBytes(plangsJSON).Get("vtables.pl").ForEach(
		func(key gjson.Result, value gjson.Result) bool {
			plangs = append(plangs, value)
			return true
		})

	sort.Slice(plangs, func(i, j int) bool {
		a := strings.ToLower(plangs[i].Get("name").String())
		b := strings.ToLower(plangs[j].Get("name").String())
		return a < b
	})

	return plangs
}

func main() {
	plangs := loadPlangs()

	app := fiber.New()

	app.Static("/", "./static")

	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, Layout(Home(plangs)))
	})

	app.Get("/about", func(c *fiber.Ctx) error {
		return Render(c, Layout(About()))
	})

	app.Use(NotFoundMiddleware)

	log.Fatal(app.Listen(":3000"))
}

func NotFoundMiddleware(c *fiber.Ctx) error {
	return Render(c, NotFound(), templ.WithStatus(http.StatusNotFound))
}

func Render(c *fiber.Ctx, component templ.Component, options ...func(*templ.ComponentHandler)) error {
	componentHandler := templ.Handler(component)
	for _, o := range options {
		o(componentHandler)
	}
	return adaptor.HTTPHandler(componentHandler)(c)
}
