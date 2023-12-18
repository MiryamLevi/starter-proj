

export function Menu() {
  const menuItems = [
    { id: 1, name: "Inbox", icon: "", count: 8 },
    { id: 2, name: "Starred", icon: "", count: 8 },
    { id: 3, name: "Sent", icon: "", count: 8 },
    { id: 4, name: "Draft", icon: "", count: 8 },
    { id: 5, name: "Trash", icon: "", count: 8 },
  ];
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          {
            item.id
          }
        {/* <menuItems item={item} key={item.id} /> */}
        </li>
      ))}
    </ul>
  );
}
