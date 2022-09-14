import UserLoader from "./user/UserLoader";
import { UserInfo } from "./user/UserInfo";

function App() {
  return (
    <>
      <UserLoader userId="222">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="111">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="333">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
