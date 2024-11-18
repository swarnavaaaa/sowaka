import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeFeatures = ({ feature }) => {
  return (
    <section id="concerns-we-address" className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>{markdownify(feature.title)}</h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {feature.features.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={`feature-${i}`}
            >
              {item.icon && (
                <Image
                  className="mx-auto"
                  src={item.icon}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
              <div className="mt-4">
                {markdownify(item.name, "h3", "h5")}
                <p className="mt-3">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto w-fit mt-3">
          {feature?.button?.link && (
            <Link
              className="btn btn-primary mt-4"
              href={feature.button.link}
              rel={feature.button.rel}
            >
              {feature.button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
