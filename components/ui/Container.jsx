// Page-width wrapper — max 1440px, responsive gutters.
export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
