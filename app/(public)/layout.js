

export default function PublicLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        
      </div>
      <div className="col-span-12">{children}</div>
      <div className="col-span-12">
       
      </div>
    </div>
  );
}
