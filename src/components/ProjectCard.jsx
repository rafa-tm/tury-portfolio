import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-red-500">
      <h1>{project.nome}</h1>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};
