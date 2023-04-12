const findDefaultValue = (options, defaultValue) =>
  options.find((option) => option.value === defaultValue) || options[0];

export default findDefaultValue;
