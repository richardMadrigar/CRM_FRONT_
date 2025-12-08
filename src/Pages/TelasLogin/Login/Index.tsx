import { CircularProgress } from "@mui/material";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { BasePageLogin } from "../components/BasePageLogin";
import { FooterFom } from "./components/FooterFom";
import { FormLogin } from "./components/FormLogin";
import { HeaderLogin } from "./components/HeaderLogin";

export const PageLogin = () => {

  const { handleLogin, valuesInputsLogins, loadingLogin } = useAuthContext();

  const handleChangeLogin = async () => {
    await handleLogin({
      email: valuesInputsLogins.email,
      senha: valuesInputsLogins.senha,
    });
  };

  return (
    <BasePageLogin>
      <HeaderLogin />

      <FormLogin />

      <FooterFom />

      <ButtonCore
        fullWidth
        disabled={loadingLogin}
        title="Login"
        type="submit"
        onClick={handleChangeLogin}
      >
        {loadingLogin && (
          <CircularProgress size={20} sx={{ color: "white", ml: 4 }} />
        )}
      </ButtonCore>

      {/* <LinkCore color={`${theme.palette.primary.main}`} to="/register">
				<ButtonCore
					title="Criar nova conta"
					variant="outlined"
					fullWidth
					sx={{ mt: "16px" }}
				/>
			</LinkCore> */}
    </BasePageLogin>
  );
};
