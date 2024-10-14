import { StaticImageData } from "next/image";

export interface ProductsType {
    lokes: List[];
    spirptech: List[]
}

export type List = {
    image: StaticImageData;
    alt: string;
    link: string;
}