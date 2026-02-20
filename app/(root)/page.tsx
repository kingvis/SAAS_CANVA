import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className="home">
        <h1 className="home-heading text-brand-500 font-black mb-4 drop-shadow-md align-middle text-5xl">
          ✨ Unleash Your Creative Vision ✨
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-3 group translate-y-0 transition-transform hover:-translate-y-2"
            >
              <li className="flex-center w-fit rounded-full bg-brand-100/90 backdrop-blur-md p-5 shadow-lg shadow-brand-400/20 transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:bg-white border-2 border-brand-200/50">
                <Image src={link.icon} alt="image" width={28} height={28} className="transition-transform group-hover:animate-bounce" />
              </li>
              <p className="p-16-semibold text-center text-brand-500 drop-shadow-md transition-all group-hover:text-brand-400 group-hover:scale-105">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home