export default function Academy() {
  const academy = [
    { id: 1, name: 'أمير', dueDate: 2024, lastDue: 2022 },
    { id: 2, name: 'علي', dueDate: 2025, lastDue: 2020 },
    { id: 3, name: 'أحمد', dueDate: 2025, lastDue: 2020 },
    { id: 4, name: 'عمر', dueDate: 2025, lastDue: 2020 },
  ];

  const academyItems = academy.map((item) => (
    <div key={item.id}>
      <div>{item.name}</div>
      <div>{item.dueDate}</div>
      <div>{item.lastDue}</div>
      <hr />
    </div>
  ));

  return <div>{academyItems}</div>;
}
