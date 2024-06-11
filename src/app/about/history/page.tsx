import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/legacy/image";

import LineHeading from "@/components/about/LineHeading";
import HB1 from "@/../public/humble-beginnings-1.png";
import MaamReg from "@/../public/maam-reg.png";
import MaamLolit from "@/../public/maam-lolit.png";
import MaamWeng from "@/../public/maam-weng.png";
import TransferOfCampus1 from "@/../public/transfer-of-campus-1.png";
import NewEra1 from "@/../public/new-era-1.png";

function HeroSection() {
  return (
    <div className="relative max-h-[80vh] w-full">
      <Image
        src="/history-bg.png"
        height={643}
        width={1920}
        alt="History"
        className="-z-10 w-full object-cover"
      />
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center gap-y-5">
        <div className="text-white font-display text-bold text-7xl uppercase">
          History
        </div>
        <div className="text-muted 0 container max-w-[50vw] mx-auto text-center text-xl">
          History of Angeles City National High School - Special Science Class
          (SSC) and Angeles City Science High School
        </div>
      </div>
    </div>
  );
}

function HumbleBeginnings() {
  return (
    <div className="my-[2vh] mt-[5vh]">
      <LineHeading title="Humble Beginnings" />
      <div className="py-[2vh]">
        <div className="float-none mx-auto max-w-full md:float-left md:mr-[1vw] md:max-w-[35vw]">
          <Image src={HB1} className="rounded-lg" />
        </div>
        <p>
          It was in <span className="bold-accent">1993</span> when the humble
          beginnings of the Special Science Class took course. Being chosen as
          one of the hundred and ten Science and Technology High Schools in the
          Philippines, the main goal of the institution is to produce
          scientifically-inclined and globally competitive students,
          holistically honing their skills and knowledge, and at the same time
          instilling in them worthwhile values.
        </p>
        <p>
          To conform to these perspectives, the DOST provided the school with
          amenities and privileges that help foster the gift of knowledge to its
          well deserving students. Such included Science Laboratory, put up in{" "}
          <span className="bold-accent">1995</span> and furnished with complete
          equipment and books, and sixteen units of computers. Teachers selected
          to be a part of said class were willing to undergo professional growth
          by attending various scholarship programs for their professional
          growth in the different prestigious universities here and abroad.
        </p>
        <p className="indent-10 mt-4">
          <span className="bold-accent">Mr. Joel S. Regala</span>, a recipient
          of the UP-Asian Center Scholarship finished his Master’s degree
          through the DOST-SEI support.{" "}
          <span className="bold-accent">Mrs. Ma. Remedios T. Bautista</span>,
          who has attended an International Training on Upgrading Mathematics
          and Science Skills Through Distance Learning Technology in Limoges,
          France and a successful nominee for the SEAMEO-RESCAM Scholarship
          Program in Penang, Malaysia obtained a specialist certificate in
          Action Research on the Improvement of Teaching in Science and
          Mathematics.
        </p>
      </div>
      <div className="space-y-8 my-8">
        <div className="flex justify-center gap-x-8">
          <div className="max-w-[12vw]">
            <Image src={MaamReg} className="rounded-lg w-full" />
          </div>
          <div className="max-w-[12vw]">
            <Image src={MaamLolit} className="rounded-lg w-full" />
          </div>
          <div className="max-w-[12vw]">
            <Image src={MaamWeng} className="rounded-lg w-full" />
          </div>
        </div>
        <p className="indent-10">
          <span className="bold-accent">Ms. Regina Mignon C. Bognot</span>,
          likewise is a recipient of a Scholarship Program of the National
          Educators’ Academy of the Philippines obtaining her Master of Arts in
          Values Education and Development at Miriam College, Diliman, Q.C.{" "}
          <span className="bold-accent">Mrs. Rowena S. Pangilinan</span> was
          likewise a recipient of SEAMO-RELC Scholarship in the Republic of
          Singapore obtaining a Specialist Certificate in Language Curriculum
          and Materials Development. After a year, came the second line up of
          competent faculty members. One of them is{" "}
          <span className="bold-accent">Mrs. Lolita G. Bautista</span> who was
          granted to study in Japan Friendship Programme for 21st Century
          Education category and was sponsored by Japan International
          Cooperation Agency (JICA).
        </p>
        <p className="indent-10">
          Among teachers who were also recipients of an international
          scholarship were{" "}
          <span className="bold-accent">Ms. Erlinda F. Cortez</span> and{" "}
          <span className="bold-accent">Mr. Andre G. Pineda</span>. However,
          some of them opted to migrate to other countries and some of them
          transferred to bigger universities. Teachers of succeeding batches
          continue to strive for professional advancement by pursuing graduate
          studies and by attending various seminars. Using these as principal
          resources, the school has high hopes of achieving academic excellence.
        </p>
      </div>
    </div>
  );
}

function PioneerBatch() {
  return (
    <div className="my-[2vh]">
      <LineHeading title="Pioneer Batch" />
      <div className="py-[2vh]">
        <p className="indent-10">
          <span className="bold-accent">Dr. Wilfredo S. Ocampo</span>, then a
          Science teacher was sent by the Department of Science and Technology
          (DOST) to attend a training program in Malaysia. What was taught to
          him greatly inspired him to put up a school for mentally gifted
          students. Thus, his brilliance led to the birth of the Special Science
          Class (SSC) making him the coordinator of said program. The pioneer
          batch was composed of 120 students, all of which are passers of the
          imposed DOST requirement. The students were divided into three
          sections, namely Argon, Boron, and Carbon, with advisers{" "}
          <span className="bold-accent">
            Mrs. Rowena S. Pangilinan, Mrs. Alma Bautista-Gueco, and Mrs. Ma.
            Remedios T. Bautista
          </span>
          , respectively.
        </p>
      </div>
    </div>
  );
}

function CultureOfExcellence() {
  return (
    <div className="my-[2vh]">
      <LineHeading title="Culture of Excellence" />
      <div className="py-[2vh]">
        <p className="indent-10">
          The Special Science Class displayed outstanding academic performance
          throughout the years, making it the most sought-after school in
          Angeles City and even in the neighboring municipalities. The SSC was
          one of the schools to bag the UP-Pautakan Oblation Trophy after
          winning three years in a row. It also dominated the two most
          prestigious quiz shows in Philippine television history, the Battle of
          the Brains of Focal Media Arts, RPN 9, and the Digital LG Quiz of GMA
          7. The Acad Team also reveled as winners in the Philips Mind Challenge
          of 2001 and the Sharp Minds Challenge in 2006. The SSC also shines
          proudly as it does not fail to produce dominant victors in DepEd
          sponsored competitions such as press conferences, science and math
          festivals, the MTAP, and many others. It also stands out in
          invitational contests hosted by the roster of schools in the city, not
          to mention its well-known reputation as an achiever-school in the
          region. In 2005, the school ranked 7th, among 500 schools in the
          regional press conference. It also ranked 2nd in the English regional
          achievement test among the seventeen divisions comprising region III.
          As the years went on, so did the list of achievements the school
          harvests, thereby strengthening the culture of excellence amongst its
          students. SSC graduates pursue their college degrees in the leading
          universities of the country, most ofthem scholars pursuing
          science-related courses, adhering to the curriculum inspired by the
          school. The alumni of SSC also excel in their own chosen paths,
          oftentimes graduating with recognition.
        </p>
      </div>
    </div>
  );
}

function TransferOfCampus() {
  return (
    <div className="my-[2vh]">
      <LineHeading title="Transfer of Campus" />
      <div className="py-[2vh]">
        <div className="float-right ml-[1vw] max-w-[25vw]">
          <Image src={TransferOfCampus1} className="rounded-lg" />
        </div>
        <p>
          The SSC which was turned- over by the DOST to DepED in 1998 stood no
          tenant to the Pandan campus of its mother school, the Angeles City
          National High School. It was allotted a portion of the lot where the
          Dr. Clemente N. Dayrit Sr. Elementary School stood. Today, the school
          address is beamed at Dona Aurora St. Lourdes Sur East, Angeles City.
          There is potent development seen in the lot, with the campus now
          composed of nine edifices and a covered court- a joint project of the
          local government and concerned TA officers, teachers and parents.
        </p>
      </div>
    </div>
  );
}

function NewEra() {
  return (
    <div className="my-[15vh] clear-both">
      <LineHeading title="New Era" />
      <div className="py-[2vh]">
        <div className="float-left mr-[1vw] max-w-[25vw]">
          <Image src={NewEra1} className="rounded-lg" />
        </div>
        <p className="indent-10">
          When Dr. Wilfredo S. Ocampo's term as consultant has come to an end,
          Mr. Wendel C. Cabrera was appointed as officer-in-charge in January
          2006. He was the foreman of the movement in the creation of a Science
          High School. Hence, through the initiative of Dr. Antonieta B.
          Tiotuico, the Schools Division Superintendent and the collective
          efforts of the different stakeholders, Angeles City Science High
          School which is a newly established specialized high school has been
          granted by the Regional Director, Dr. Dinah F. Mindo. Its
          establishment as an independent public high school is a take off from
          Angeles City National High School-Special Science Class organized in
          1994. With its independent status, it began accepting enrollees for
          its pilot school year 2006-2007, admiting 100 students divided into
          three sections: Archimedes, Joule and Kelvin, with advisers, Mrs.
          Rowena S. Pangilinan, Mr. Joel S. Regala and Mrs. Lelanie
          Pineda-Soriano, an alumna of the SSC, respectively. These students
          passed the reformed SSC entrance examination and interview process,
          and are still set to undergo deliberation for failure to comply with
          the set standard. Said batch are expected to graduate in 2010. After
          Mr. Cabrera's short but fruitful stay has ended, an equally competent
          science teacher in the person of Ms. Victoriana P. Bondoc, was
          appointed to head the SSC.
        </p>
        <p className="my-8">
          Under her term, the SSC and SHS continued to perform outstandingly
          therefore maintaining its culture of excellence. As there should
          really be someone qualified to manage the school who is either a math
          or a science major, Mrs. Ma Esperanza S. Malang, a member of the
          faculty was promoted from Teacher III to Principal I in February 2007.
          Ms. Victoriana P. Bondoc, was likewise promoted Education Supervisor I
          for Science and Mr. Wendel C. Cabrera, on the other hand, was promoted
          Principal I of Balibago High School. Angeles City National High
          school- Special Science Class seats proudly in the echelon of
          excellence, and the Angeles City Science High School both being the
          premiere schools of Angeles City, continue to strive for academic
          excellence and to live up to vision and mission of the school.
        </p>
      </div>
    </div>
  );
}

export default function History() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="px-[15vw] text-lg text-justify leading-relaxed">
        <HumbleBeginnings />
        <PioneerBatch />
        <CultureOfExcellence />
        <TransferOfCampus />
        <NewEra />
      </div>
      <Footer />
    </>
  );
}
