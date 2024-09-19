
import Image from "next/image";
import SectionTitle from "./SectionTitle"; // Ensure this is correctly exported from its file
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { RiFlutterLine } from "react-icons/ri";
import { MdCss } from "react-icons/md";
import { SiFirebase } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 text-textOrange"
    >
      {/* Section Title */}
      <SectionTitle title="About Me" />

      <div className="flex flex-col lgl:flex-row gap-16">
        {/* About Text */}
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Mercy Dede Foli and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2022 when I decided to create my first vegetable Website — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span className="text-textGreen">
              a huge corporation, and a student-led design studio.
            </span>
          </p>
          <div className="w-full flex flex-col items-center mt-15">
          {/* Technologies Section */}
          <h2 className="text-3xl font-titleFont font-semibold text-textOrange mt-12">
            Technologies
          </h2>
          </div>
          <p className="mt-4">
            Here are a few technologies worked with and are still working with some:
          </p>

          {/* Technologies List */}
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-0">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaReact />
              </span>
              REACT
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-textGreen">
                <TbBrandMongodb />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-textGreen">
                <RiFlutterLine />
              </span>
              FLUTTER
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-textGreen">
                <AiOutlineHtml5 />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-textGreen">
                <MdCss />
              </span>
           CSS
            </li>
            <li className="flex items-center gap-2 ">
              <span className="text-textGreen">
                <SiFirebase />
              </span>
              DATABASE
            </li>
            
          </ul>
        </div>

        {/* Profile Image */}
        <div className="w-full lgl:w-1/3 h-80 relative group ">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src="/assets/images/profilecv.jpg"
                alt="profileImg"
                layout="intrinsic"
                width={320}
                height={320}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textOrange rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

