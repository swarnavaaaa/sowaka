import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

function Profile({ data }) {
  const { frontmatter } = data;
  const { title, profiles } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}

        <div className="section row justify-center items-center  -mt-6">
          {profiles.map((profile, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12 h-full shadow">
                {profile?.image && (
                  <div className="w-full  m-3 mb-6">
                    <Image
                      src={profile.image.src}
                      alt={profile.image.alt}
                      height={400}
                      width={400}
                      className="max-h-[400px] object-contain"
                    />
                  </div>
                )}
                <div className=" relative ">
                  {markdownify(profile.title, "h4")}
                </div>
                {markdownify(profile.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
