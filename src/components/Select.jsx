import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function Select({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const { t } = useTranslation();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setShowOptions(false);
  };

  return (
    <div className="inline-block text-left">
      <div className="min-w-[12rem]">
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-between w-full px-4 py-2 text-md font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-secondary "
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setShowOptions(!showOptions)}
          >
            {selectedOption ? selectedOption.label : t("title.filterLabel")}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {showOptions && (
        <>
          <div
            className="fixed top-0 left-0 h-screen w-screen z-40"
            onClick={() => setShowOptions(false)}
          ></div>
          <div
            className="origin-top absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className="block w-full text-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};
