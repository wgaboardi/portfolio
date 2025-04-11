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
		<Carousel opts={{ loop: true, align: "center" }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent className="flex">
				{props.imagens.map((imagem) => (
					<CarouselItem key={imagem} className="relative h-96  md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
						<Image src={imagem} alt="Imagem" fill className="object-cover" objectFit="cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}