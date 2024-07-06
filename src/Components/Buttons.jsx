export const Buttons = ({ val, className,fn }) => {
  const clicked = () => {
    fn(val);
    console.log("Click Happen", val);
   
  };
  return (
    <button onClick={clicked} className={className}>
      {val}
    </button>
  );
};
