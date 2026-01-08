import ToggleText from "../components/ToggleText";
import CounterParent from "../components/CounterParent";
import UserCard from "../components/UserCard";

function Day3() {
  return (
    <div>
      <h1>Day 3</h1>
      <h2>User Card (Reuse components)</h2>
      <UserCard name="Mee" role="Dev" />
      <UserCard name="R" role="Prog" />

      <h2>Toggle Text</h2>
      <ToggleText />

      <h2>Lift State Up (two components using same state)</h2>
      <CounterParent />
    </div>
  );
}
export default Day3;
