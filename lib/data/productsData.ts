import { ProductsType } from "../types/productsType";
import TCX_TCI from "@/public/products/TCX_TCI.jpg";
import TBX_TBI from "@/public/products/TBX_TBI.png";
import ILB_ILS from "@/public/products/ILB_ILS.png";

export const productsData: ProductsType[] = [
  {
    lokes: [
      {
        image: TCX_TCI,
        alt: "TCX-TCI TowerClean",
        link: "https://www.lakos.com/product/tcx-tci-towerclean/",
      },
      {
        image: TBX_TBI,
        alt: "TBX-TBI SideStreamClean",
        link: "https://www.lakos.com/product/tbx-tbi-sidestreamclean/",
      },
      {
        image: ILB_ILS,
        alt: "ILB-ILS Separators",
        link: "https://www.lakos.com/product/lakos-ilb-ils-separators/",
      },
    ],
    spirptech: [
        {
            image: ILB_ILS,
            alt: "ILB_ILS",
            link: "https://www.lakos.com/product/lakos-ilb-ils-separators/",
        },
    ],
  },
];
