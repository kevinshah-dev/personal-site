export function SectionHeading({
  children,
}: {
  children: string;
}) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
    </div>
  );
}
