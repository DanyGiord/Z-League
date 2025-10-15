import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const supabase = createClient(
  "https://gptmxpmpjhkgntmlgsvm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdG14cG1wamhrZ250bWxnc3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4MTM0NjUsImV4cCI6MTk4MjM4OTQ2NX0.J_-NNWPwvXdr2mwJqoRqHCderOow7KW9aK1EIx7IHPk"
);

function Signup() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/Success");
    } else {
      navigate("/");
    }
  });

  return (
    <>
      <BsArrowLeft
        className="arrow-back"
        style={{ marginLeft: "20px" }}
        onClick={() => navigateHome()}
      />
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord"]}
      />
    </>

    // <div className="form-signin">
    //   <form>
    //     <h1 className="h3 mb-3 fw-normal" style={{ color: "white" }}>Please sign in</h1>
    //     <div className="form-floating pb-3">
    //       <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" />
    //       <label htmlFor="floatingInput">Email address</label>
    //     </div>
    //     <div className="form-floating">
    //       <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    //       <label htmlFor="floatingPassword">Password</label>
    //     </div>
    //     <div className="checkbox mb-3 ">
    //       <label style={{ color: "white" }}>
    //         <input type="checkbox" value="remember-me" /> Remember me
    //       </label>
    //     </div>
    //     <button className="w-100 btn btn-lg btn-custom" type="submit">Sign in</button>
    //     <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
    //   </form>
    // </div>
  );
}

export default Signup;
