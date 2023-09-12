import PropTypes from "prop-types";

export default function ResumeCard({ resume, logotipo }) {
  return (
    <div className="flex relative py-2 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-16 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm"></div>
      <div className="flex pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <img src={logotipo} alt="Logotipo" className="max-w-[160px]" />
          <div className="flex-grow gap-6 sm:pl-8 mt-6 sm:mt-0 text-xl">
            <h3 className="font-bold text-2xl mb-2">{resume.title}</h3>
            <p className="mb-2">{resume.description}</p>
            <p>{resume.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ResumeCard.propTypes = {
  resume: PropTypes.object.isRequired,
  logotipo: PropTypes.string.isRequired,
};
