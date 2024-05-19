export default function Listing({ cancers, active, setActive }) {

  return (
    <ul className="list-group col-6 mx-auto">
      {cancers.map((c) => (
        <button key={c.id} type="button" className={"list-group-item list-group-item-action " + ((active != null && active.id == c.id) ? "active" : "")} onClick={() => setActive(c)}>{c.type}</button>
      ))}
    </ul>
  );
}