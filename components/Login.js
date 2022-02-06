import React from "react";
import Image from "next/image";
// On importe le système d'authentification de next
import { signIn } from "next-auth/react";
import logoPic from "../public/icon-above-font.png";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image src={logoPic} height={400} width={400} objectFit="contain" />
      {/* Au clique on fait appel à la fonction signIn de next-auth pour se connecter à Github */}
      <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">
        Se connecter avec Github
      </h1>
    </div>
  );
}

export default Login;
