import type { ButtonProps } from "@/app/components/button/types";
import { tv } from "tailwind-variants";

const button = tv({
	base: "h-14 border-4 px-4 py-2.5 rounded-lg transition-all shadow-3xl hover:shadow-5xl hover:-translate-1 cursor-pointer",
	variants: {
		color: { yellow: "bg-yellow-400" },
	},
});

export default function Button(props: ButtonProps) {
	return (
		<button type="button" className={button({ color: "yellow" })}>
			{props.children}
		</button>
	);
}
