export default findDefaultValue = (options, defaultValue) =>
  options.find((option) => option.value === defaultValue) || options[0];
