import PropTypes from "prop-types";

export default function Input({ label, value, type, nome, id, cols, rows }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="" htmlFor="name">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="rounded-md text-lightText dark:text-darkText text-lg p-2 bg-lightBackground dark:bg-darkBackground"
          type={type}
          value={value}
          name={nome}
          id={id}
          cols={cols}
          rows={rows}
        />
      ) : (
        <input
          className="rounded-md text-lightText dark:text-darkText text-lg p-2 bg-lightBackground dark:bg-darkBackground"
          type={type}
          value={value}
          name={nome}
          id={id}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  props: PropTypes.any,
  cols: PropTypes.number,
  rows: PropTypes.number,
};
