package main

import (
	"log"
	"net/http"
	"os"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/tidwall/gjson"
)

func loadData() gjson.Result {
	json, err := os.ReadFile("static/plangs.json")
	if err != nil {
		log.Fatal(err)
	}
	return gjson.ParseBytes(json)
}

func main() {
	data := loadData()

	app := fiber.New()

	app.Static("/", "./static")

	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, Layout(Home(data), "home"))
	})

	app.Get("/about", func(c *fiber.Ctx) error {
		return Render(c, Layout(About(), "about"))
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
