export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-7 lg:size-10" />
    </>
  );
};
