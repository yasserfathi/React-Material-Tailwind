import ComplexNavbar from "./navbar";
import SideBar from "./sidebar";
import Content from "./content";
import TableContent from "./table";
 
export default function Dashboard() {
  return (
    <>
    <ComplexNavbar/>
    <div className="grid grid-cols-1 lg:gap-10 xs:grid-cols-1 lg:grid-cols-4">
      <SideBar />
      <div className="col-span-3 p-4 text-lg round ed-xl">
        <Content />
        <TableContent />
      </div>
    </div>
    </>
  );
}