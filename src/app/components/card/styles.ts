import type { LinkProps } from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

type Symbols = "landing-page" | "ui-ux-design" | "domain-manager";

export type CardProps = {
	title?: string;
	children?: ReactNode;
	action?: LinkProps;
	symbol?: Symbols;
} & HTMLAttributes<HTMLDivElement>;
