import React, { useState } from "react";
import PropTypes from "prop-types";

Tabs.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  active: PropTypes.string,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  direction: "vertical",
};

export function Tabs({
  children,
  direction = "vertical",
  active = null,
  onChange,
  title,
}) {
  const childrenArray = React.Children.toArray(children);
  let [currentTab, setCurrentTab] = useState(childrenArray[0].key);

  if (active !== null) {
    currentTab = active;
    setCurrentTab = onChange;
  }

  const handleChange = (n) => {
    if (onChange) {
      onChange(n);
    }
    if (active === null) {
      setCurrentTab(n);
    }
  };

  const newChildren = childrenArray.map((tab) => {
    return React.cloneElement(tab, {
      selected: currentTab === tab.key,
    });
  });

  return (
    <div
      className={`h-full  flex ${
        direction === "horizontal" ? "flex-col" : "py-0"
      }`}
    >
      <div
        className={`${direction === "horizontal" ? "w-full" : "w-60 fixed"}`}
      >
        {title && (
          <h1 className="mb-4 text-black font-bold text-2xl">{title}</h1>
        )}

        <div
          className={`${
            direction === "horizontal" ? "border-b w-full" : "border-l"
          } border-gray-200`}
        >
          <ul className={`${direction === "horizontal" ? "flex" : null}`}>
            {childrenArray.map((child) => (
              <li
                key={child.key}
                className={`${
                  currentTab === child.key
                    ? "border-indigo-500 text-indigo-500 font-bold"
                    : "text-gray-500  hover:text-black"
                } ${
                  direction === "horizontal"
                    ? "border-b-2 mr-3"
                    : "border-l-2 px-3"
                }  cursor-pointer border-transparent transition ease-in-out duration-150 py-1 text-sm leading-5`}
              >
                <span
                  onClick={() => handleChange(child.key)}
                  aria-expanded={currentTab === child.key}
                >
                  {child.props.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${direction === "horizontal" ? "w-full" : "w-full ml-60"} `}
      >
        {newChildren}
      </div>
    </div>
  );
}

export function Tab({ children, selected }) {
  return <div hidden={!selected}>{children}</div>;
}
