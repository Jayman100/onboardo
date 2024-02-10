function Legends() {
  return (
    <div className="s flex  flex-col gap-4 border border-black p-2">
      <Legend color="bg-green-500" name="Visa free" />
      <Legend color="bg-green-300" name="Visa on arrival" />
      <Legend color="bg-blue-500" name="electronic travel authorization" />
      <Legend color="bg-red-300" name="Visa online" />
      <Legend color="bg-red-500" name="Visa required" />
    </div>
  );
}

function Legend({ color, name }) {
  return (
    <div className="flex gap-2">
      <p className={`${color} h-8 w-16 `}></p>
      <span className="uppercase">{name}</span>
    </div>
  );
}

export default Legends;
