import { useState } from "react";

type Tab = {
  name: string;
  content: string;
  isActive: boolean;
};
export function Tab() {
  const [selected, setSelected] = useState("");
  const Tabs: Tab[] = [
    { name: "Users", content: "users", isActive: true },
    { name: "Products", content: "products", isActive: false },
    { name: "Tags", content: "tags", isActive: false },
  ];

  const selectItems = Tabs.map((item) => {
    return <button onClick={() => setSelected(item)}>{item}</button>;
  });

  const divItems = Tabs.map((item) => {
    return (
      <div className={selected === item ? "visible" : "hidden"}>
        Showing all {item}
      </div>
    );
  });

  return (
    <>
      <div>
        <div>{selectItems}</div>
        <div>{divItems}</div>
      </div>
    </>
  );
}
