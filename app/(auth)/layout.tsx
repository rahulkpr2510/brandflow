import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default AuthLayout;
