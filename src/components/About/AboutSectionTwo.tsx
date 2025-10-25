import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
          <div
          className="relative mx-auto mb-12 max-w-[500px] text-center lg:m-0"
          data-wow-delay=".15s"
        >
          <Image
            src="/images/about/r789-homepage.webp"
            alt="r789 game homepage"
            width={500} // Set to the image's intrinsic width or a reasonable default
            height={480} // Set to the image's intrinsic height or a reasonable default
            className="drop-shadow-three dark:hidden dark:drop-shadow-none"
          />
          <Image
            src="/images/about/r789-homepage.webp"
            alt="r789 game homepage"
            width={500} // Set to the image's intrinsic width or a reasonable default
            height={480} // Set to the image's intrinsic height or a reasonable default
            className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
          />
        </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
              <SectionTitle
                title="Premium Quality Platform"
                paragraph="We’ve built R789 Game using advanced technologies like Next.js and Tailwind CSS for maximum speed and reliability.
Our backend ensures fast loading times, error-free performance, and complete data protection for users." 
                mb="44px"
                />
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Every part of the R789 app is tested and optimized for smooth operation.
                You’ll never face unnecessary lags or crashes during gameplay.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                If you ever face an issue, our customer service is quick to respond through live chat or email.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Easily Available for new Players
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our app follows clean coding standards, allowing fast updates and feature improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
