import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

export interface CarrosselImagensProps {
	imagens: string[]
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imagens.map((imagem) => (
					<CarouselItem key={imagem} className="relative h-96 w-full">
						<img src={imagem} alt="Imagem" width="100%" height="100%"className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}