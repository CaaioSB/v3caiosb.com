import Image from "next/image";
import Link from "next/link";
import { tv } from "tailwind-variants";
import type { CardProps } from "./styles";

const card = tv({
	base: "flex flex-col w-full gap-8 border-3 rounded-3xl cursor-default transition-all shadow-3xl hover:shadow-5xl hover:-translate-1",
	variants: {
		size: {
			sm: "",
			md: "p-8",
			lg: "",
		},
	},
	slots: {
		content: "flex flex-col gap-4",
	},
});

export default function Card(props: CardProps) {
	return (
		<div className={card().base({ size: "md" })}>
			{props.symbol && (
				<Image
					width={85}
					height={85}
					src={`/svg/symbol/${props.symbol}.svg`}
					alt={props.symbol}
				/>
			)}

			<div className={card().content()}>
				{props.title && <h4>{props.title}</h4>}

				{props.children}
			</div>

			{props.action && (
				<Link {...props.action} className="font-nunito font-black text-2xl">
					Saiba mais {"->"}
				</Link>
			)}
		</div>
	);
}
