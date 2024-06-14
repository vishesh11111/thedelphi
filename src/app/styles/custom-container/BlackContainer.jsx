const BlackContainer = ({ children }) => {
  return (
    <div className="bg-black w-full">
      <div className="container mx-auto  max-w-screen-2lg">{children}</div>
    </div>
  );
};

export default BlackContainer;
