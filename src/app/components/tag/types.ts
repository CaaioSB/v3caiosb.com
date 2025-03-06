import type { ReactNode } from "react";

type Colors = "orange" | "fuchsia" | "amber" | "salmon" | "yellow";

export type TagProps =
	| {
			label: string;
			children?: never;
			color: Colors;
	  }
	| { label?: never; children?: ReactNode; color: Colors };
