"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { transformationTypes } from "@/constants";
import { IImage } from "@/lib/database/models/image.model";
import { formUrlQuery } from "@/lib/utils";

import { Button } from "../ui/button";

import { Search } from "./Search";

export const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <div className="collection-heading">
        <h2 className="h2-bold text-dark-600">Recent Edits</h2>
        {hasSearch && <Search />}
      </div>

      {images.length > 0 ? (
        <ul className="collection-list">
          {images.map((image, index) => (
            <Card image={image} key={image._id} index={index} />
          ))}
        </ul>
      ) : (
        <div className="collection-empty">
          <div className="text-center">
            <div className="mb-4 h-16 w-16 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center animate-bounce">
              <span className="text-2xl">📸</span>
            </div>
            <p className="p-20-semibold text-gray-600">No images yet</p>
            <p className="p-16-medium text-gray-500 mt-2">Start creating amazing transformations!</p>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full">
            <Button
              disabled={Number(page) <= 1}
              className="collection-btn group relative overflow-hidden"
              onClick={() => onPageChange("prev")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <PaginationPrevious className="relative z-10 hover:bg-transparent hover:text-white transition-all duration-300" />
            </Button>

            <div className="flex-center p-16-medium w-fit flex-1">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                <span className="font-semibold text-purple-600">{page}</span>
                <span className="text-gray-500 mx-2">/</span>
                <span className="font-semibold text-pink-600">{totalPages}</span>
              </div>
            </div>

            <Button
              className="button w-32 bg-purple-gradient bg-cover text-white group relative overflow-hidden"
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <PaginationNext className="relative z-10 hover:bg-transparent hover:text-white transition-all duration-300" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

const Card = ({ image, index }: { image: IImage; index: number }) => {
  return (
    <li 
      className="animate-fade-in-up"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <Link href={`/transformations/${image._id}`} className="collection-card group">
        <div className="relative overflow-hidden rounded-xl">
          <CldImage
            src={image.publicId}
            alt={image.title}
            width={image.width}
            height={image.height}
            {...image.config}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <Image
              src={`/assets/icons/${
                transformationTypes[
                  image.transformationType as TransformationTypeKey
                ].icon
              }`}
              alt={image.title}
              width={20}
              height={20}
              className="animate-pulse"
            />
          </div>
        </div>
        <div className="flex-between p-4">
          <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600 group-hover:text-purple-600 transition-colors duration-300">
            {image.title}
          </p>
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <span className="text-white text-sm">→</span>
          </div>
        </div>
      </Link>
    </li>
  );
};