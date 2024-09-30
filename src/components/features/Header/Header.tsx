import { RootState } from "./../../../redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function Header() {
  const user = useSelector((state: RootState) => state.user);

  const [gereeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    const date = new Date().getHours();

    if (date < 12) {
      setGreeting("Good Morning");
    } else if (date < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <header className="flex justify-between p-4 items-center mb-4">
      <h1 className="flex flex-col font-semibold text-3xl text-titleOrange">
        <span>{gereeting},</span>
        <span>{user.name}</span>
      </h1>
    </header>
  );
}
