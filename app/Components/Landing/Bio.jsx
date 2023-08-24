export default function Bio() {
  return (
    <section className="flex gap-4 p-4 bg-emerald-300 rounded-3xl">
      <div className="flex-1 p-2 bg-white rounded-lg shadow">
        <h3 className="text-2xl text-emerald-600">Breed</h3>
        <p>Mini Golden Retriever</p>
      </div>
      <div className="flex-1 p-2 bg-white rounded-lg shadow">
        <h3 className="text-2xl text-emerald-600">Age</h3>
        <p>3 Years</p>
      </div>
      <div className="flex-1 p-2 bg-white rounded-lg shadow">
        <h3 className="text-2xl text-emerald-600">Hobbies/Interests</h3>
        <p>Dog Parks, Pup Cups, Sleeping</p>
      </div>
    </section>
  );
}
