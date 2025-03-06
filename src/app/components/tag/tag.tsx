import { tv } from "tailwind-variants";
import type { TagProps } from "./types";

const tag = tv({
	base: "w-fit font-nunito font-black px-8 py-1 rounded-full border-2 transition-all hover:-translate-1 active:-translate-1 shadow-3xl hover:shadow-5xl active:shadow-5xl cursor-default",
	variants: {
		color: {
			fuchsia: "bg-fuchsia-300",
			orange: "bg-orange-300",
			amber: "bg-amber-200",
			salmon: "bg-rose-300",
			yellow: "bg-yellow-400",
		},
	},
});

export default function Tag(props: TagProps) {
	return (
		<div className={tag({ color: props.color })}>
			{props?.children || props.label}
		</div>
	);
}
