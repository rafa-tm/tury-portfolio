import PropTypes from "prop-types";

export default function Input(
  { label, value, type, nome, id, cols, rows, required, placeholder },
  props
) {
  return (
    <div className="w-full flex flex-col gap-2 max-w-2xl">
      <label className="text-lg" htmlFor="name">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="rounded-md text-lightText dark:text-darkText text-lg py-4 px-4 bg-lightBackground dark:bg-darkBackground"
          type={type}
          value={value}
          name={nome}
          id={id}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          className="rounded-md text-lightText dark:text-darkText text-lg py-2 px-4 bg-lightBackground dark:bg-darkBackground"
          type={type}
          value={value}
          name={nome}
          id={id}
          required={required}
          placeholder={placeholder}
          {...props}
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
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};
