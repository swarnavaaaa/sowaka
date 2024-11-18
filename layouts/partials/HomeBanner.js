import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-12 flex items-center text-left">
            <div className="w-[60%]">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              <Link
                className="btn btn-primary mt-4"
                href={banner.primaryButton.link}
                rel={banner.primaryButton.rel}
              >
                {banner.primaryButton.label}
              </Link>
              <Link
                className=" btn btn-outline-primary mt-4 ml-4"
                href={banner.secondaryButton.link}
                rel={banner.secondaryButton.rel}
              >
                <span> {banner.secondaryButton.label} </span>
                <Image
                  className="ml-2 inline-block "
                  src="/images/arrow-right.svg"
                  width={18}
                  height={14}
                  alt="arrow"
                />
              </Link>
            </div>
            <Image
              className="mx-auto w-[40%] px-8"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
