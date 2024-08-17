import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { error } from "console";
import authors from './authors'
import books from './books'

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
    return c.text("hello");
});

export const GET = handle(app);
export const POST = handle(app);
