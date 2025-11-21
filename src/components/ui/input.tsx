"use client";

import * as React from "react";
import "../../CSS/input.css";

function Input({ type = "text", ...props }: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className="input" {...props} />;
}

export { Input };
