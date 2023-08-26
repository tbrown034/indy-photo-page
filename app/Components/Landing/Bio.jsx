export default function Bio() {
  return (
    <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 bg-emerald-600 rounded-2xl">
      <div className="flex flex-col p-4 rounded-lg shadow bg-emerald-100">
        <h3 className="mb-2 text-2xl text-emerald-600">Breed</h3>
        <p>Mini Golden Doodle</p>
      </div>
      <div className="flex flex-col p-4 rounded-lg shadow bg-emerald-100">
        <h3 className="mb-2 text-2xl text-emerald-600">Age</h3>
        <p>3 Years</p>
      </div>
      <div className="flex flex-col p-4 rounded-lg shadow bg-emerald-100">
        <h3 className="mb-2 text-2xl text-emerald-600">Hobbies</h3>
        <p>Dog Parks, Pup Cups, Sleeping, Being a Biddy</p>
      </div>
    </section>
  );
}
