import React from "react";
import { hydrateRoot } from "react-dom/client";
import Counter from "@/routes/Counter";

const root = document.getElementById("root");

hydrateRoot(root, <Counter />);
