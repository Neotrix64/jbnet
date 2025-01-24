import Pattern from "../components/jobOffer/Pattern";

const offer = `At BairesDev®, we've been leading the way in technology projects for over 15 years. We deliver cutting-edge solutions to giants like Google and the most innovative startups in Silicon Valley.

Our diverse 4,000+ team, composed of the world's Top 1% of tech talent, works remotely on roles that drive significant impact worldwide.

When you apply for this position, you're taking the first step in a process that goes beyond the ordinary. We aim to align your passions and skills with our vacancies, setting you on a path to exceptional career development and success.

Senior Engineering Manager (Node.js) at BairesDev

Join as a Senior Engineering Manager (Node.js) to drive our development team with your deep understanding of Node.js. You'll oversee project development, set technical standards, and lead the team in delivering scalable and robust server-side applications, fostering innovation in backend development.

What you will do:

- Oversee the technical direction of Node.js projects, aligning technical decisions with business goals.
- Lead and mentor a development team, promoting effective collaboration, skill development, and project success.
- Define project requirements, scope, and timelines in collaboration with stakeholders.
- Ensure the delivery of high-quality, scalable, and efficient Node.js solutions.
- Stay informed on industry trends and emerging technologies, assessing their application in the team's projects.
- Facilitate communication and problem-solving within the team, ensuring efficient workflow and addressing technical challenges proactively.

Here’s what we are looking for:

- 7+ years of experience with Node.js.
- Proficient in Agile methodologies, ensuring efficient project delivery and team collaboration.
- In-depth knowledge of Design Patterns.
- Advanced IT infrastructure knowledge.
- Strong experience in application security best practices.
- Proven track record in developing and integrating large-scale applications.
- Expertise in both back-end and front-end development areas.
- Skilled in conducting code reviews and managing CI/CD pipelines.
- Expert understanding of client's requirements, assessing potential benefits and weaknesses.
- Advanced knowledge of the trade-offs involved in choosing specific technologies or solutions.
- Strong experience leading client and stakeholder meetings, effectively communicating technical concepts.
- Demonstrated leadership skills in team management, task allocation, risk identification, decision-making, task estimation, conflict resolution, and project planning.
- Advanced level of English.

How we do make your work (and your life) easier:

- 100% remote work (from anywhere).
- Excellent compensation in USD or your local currency if preferred
- Hardware and software setup for you to work from home.
- Flexible hours: create your own schedule.
- Paid parental leaves, vacations, and national holidays.
- Innovative and multicultural work environment: collaborate and learn from the global Top 1% of talent.
- Supportive environment with mentorship, promotions, skill development, and diverse growth opportunities.

Apply now and become part of a global team where your unique talents can truly thrive!`
// import { useCurrentJobID } from "../context/JobContext";

function JobOfferPage() {
  // const { CurrentJobID, setCurrentJobID } = useCurrentJobID("a");
  return (
    <div className="full-page h-screen">
      <div className="div top-container h-1/3 text-white bg-[#23272a] shadow-black">
        <div className="nav-bar flex justify-evenly mb-5">
          <div className="logo">
            <h4>JOBNET</h4>
          </div>
          <div className="right flex gap-4">
            <a href="">Home</a>
            <a href="">About Us</a>
            <button>Join Us</button>
          </div>
        </div>
        <div className="middle-section ml-3">
          <div className="links">
            <p className="text-lg font-semibold tracking-wider">
              <a href="" className="text-purple-400 border-b-2 border-transparent hover:border-white ease-in-out duration-300">
                Home
              </a>{" "}
              / <a href="" className="text-purple-400 border-b-2 border-transparent hover:border-white ease-in-out duration-300">Job-Offer</a> <span className="text-purple-400 pointer-events-none">/ "HERE GOES THE ID"</span>
            </p>
          </div>
          <p className="text-2xl font-bold mb-0.5">
            Work From Home Senior Engineering Manager (Node.js) - Ref. 0111E
          </p>
          <p className="text-xl font-semibold tracking-wide mb-20">Eleazar Moreta David Almonte</p>
        </div>
        <div className="botones z-10">
        <button className="text-gray-800 p-5 w-40 bg-white rounded-full font-bold tracking-wider shadow-lg hover:scale-110 ease-in-out duration-500 ml-3">Apply</button>
        <button className="text-gray-800 p-5 w-40 bg-white rounded-full font-bold tracking-wider shadow-lg hover:scale-110 ease-in-out duration-500 ml-3">Contact</button>
        <button className="text-gray-800 p-5 w-40 bg-white rounded-full font-bold tracking-wider shadow-lg hover:scale-110 ease-in-out duration-500 ml-3">Similars</button>
        </div>
      </div>
      <div className="middle-to-bottom grid bg-white h-fit -z-10 rounded-t-md ">
      {/* <div className="container h-full w-1/2 bg-gray-100 m-3 rounded-xl"></div> */}
      <div className="flex">
      <div className="aboutJobOffer ml-5 w-1/2">
      <h3 className="mt-16 text-3xl font-bold text-gray-800 mb-1">About The Job Offer</h3>
      <hr className="w-2/3 h-0.5 dark:bg-gray-700 mb-1" />
      <p className="mt-2">{offer}</p>
      </div>
      <div className="aboutJobOffer ml-5 w-1/2 ">
      <h3 className="mt-16 text-3xl font-bold text-gray-800 mb-1 flex justify-center">Meet the Team</h3>
      <h3 className="mt-16 text-3xl font-bold text-gray-800 mb-1 flex justify-center">Requirements</h3>
      <p className="mt-2"></p>
      </div>
      </div>
      <h3 className="mt-16 text-3xl font-bold text-gray-800 mb-1 flex justify-center">About us</h3>
      </div>
    </div>
  );
}

export default JobOfferPage;
