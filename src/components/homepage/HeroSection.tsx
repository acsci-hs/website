export default function HeroSection() {
  return (
    <div className="pt-16 pb-12 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 bg-fixed bg-center bg-cover hero-background">
      <div className="z-10 px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="w-full lg:w-full xl:w-4/5">
          <p className="mt-6 tracking-tighter text-white">
            <span className="font-sans font-normal text-[clamp(3rem,7.5vw,4.5rem)]">
              Home of the{"   "}
            </span>
            <span className="font-serif italic font-normal text-[clamp(3.75rem,8.5vw,6rem)]">
              Champions
            </span>
          </p>
          <p className="mt-4 font-sans text-lg font-normal leading-7 text-white text-opacity-70">
            Angeles City Science High School envisions in molding students who
            are globally competitive in the field of Science and Technology
            imbued with the necessary skills, values and attitudes to respond to
            the needs of changing society.
          </p>
          <p className="mt-8 font-sans text-xl font-normal text-white">
            Starting at $9.99/month
          </p>
        </div>
      </div>
    </div>
  );
}
