import { Button, Card, Tag } from "@/app/components";

export default function Home() {
	return (
		<div>
			<p>olá, meu nome é caio</p>
			<h1 className="">
				AMANTE DE TECNOLOGIA,
				<br />
				ASPIRANTE EM FUTURISMO
			</h1>
			<p>
				costumo dizer que programação está no meu sangue e o ciclismo, design,
				aviação e astronomia na veia.
			</p>
			<Button>começar crescer</Button>

			<div className="flex gap-8">
				<Card title="caio" action={{ href: "/about" }} symbol="landing-page">
					<small>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the , when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the with the
						release of Letraset sheets containing
					</small>
				</Card>

				<Card symbol="ui-ux-design">
					<small>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the , when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</small>
				</Card>

				<Card symbol="domain-manager">
					<small>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the , when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the with the
						release of Letraset sheets containing
					</small>
				</Card>
			</div>

			<Tag color="fuchsia" label="8 anos de experiência" />
			<Tag color="orange" label="8 anos de experiência" />
			<Tag color="salmon" label="8 anos de experiência" />
			<Tag color="amber" label="8 anos de experiência" />
			<Tag color="yellow" label="8 anos de experiência" />
		</div>
	);
}
