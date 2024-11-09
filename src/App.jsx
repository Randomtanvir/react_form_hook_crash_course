import LoginForm from "./forms/LoginForm";
import RegistrationForm from "./forms/RegistrationForm";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="bg-pink-500 p-4 text-center text-white capitalize">
          hello react form hook
        </h1>
        {/* <LoginForm /> */}
        <RegistrationForm />
      </div>
    </div>
  );
};

export default App;
