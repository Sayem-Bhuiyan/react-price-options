import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "*", name: "Not Found", id: 5 },
  ];

  return (
    <div>
      <ul className="md:flex">
        {
            routes.map(route => <Link key={route.id} route={route} />)
        }
      </ul>
    </div>
  );
};

export default Navbar;
