export default (props) => {
  if (props.show) {
    return props.children;
  }
  return false;
};
