package main

import (
	"log"
	"net/http"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

func main() {
	app := fiber.New()

	app.Static("/", "./static")

	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, Layout(Search()))
	})

	app.Get("/browse", func(c *fiber.Ctx) error {
		return Render(c, Layout(Browse(), "browse.css"))
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
