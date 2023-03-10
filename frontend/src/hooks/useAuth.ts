import { useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { fetchLogin, fetchLogout, fetchMe } from "../api/backendComponents";
import { ApplicationUser } from "../api/backendSchemas";

export function useAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const [me, setMe] = useState<ApplicationUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchMeFromApi();
  }, []);

  useEffect(() => {
    if (!me && isLoaded) {
      logout();
    } else if (!!me && isLoaded && location.pathname == "/login") {
      navigate("/");
    }
  }, [me, isLoaded]);

  async function fetchMeFromApi() {
    try {
      const meFromApi = await fetchMe({});
      setMe(meFromApi);
      setIsLoaded(true);
    } catch (error) {
      navigate("/login");
    }
  }

  async function login(username: string, password: string) {
    try {
      await fetchLogin({
        body: {
          username: username,
          password: password,
        },
      });
      console.debug("Logged in");
      await fetchMeFromApi();
      setErrorMsg("");
      navigate("/");
    } catch (error) {
      setErrorMsg("Wrong username or password!");
      console.debug("Wrong password");
    }
  }

  async function logout() {
    try {
      console.debug("logout");
      await fetchLogout({});
      navigate("/login");
      setMe(null);
      deleteCookie(".AspNetCore.Identity.Application");
    } catch (error) {
      // Cookie is most probably not valid
    }
  }

  return { me, login, logout, errorMsg, fetchMeFromApi };
}

function deleteCookie(cookieName: string) {
  document.cookie = cookieName + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
