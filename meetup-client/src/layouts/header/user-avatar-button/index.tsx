import UserAvatar from "@/components/user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
// import useGetUser from "@/hooks/auth/useGetUser";
import useLogout from "@/hooks/auth/useLogout";
import React from "react";

type UserAvatarButtonProps = {
  children?: React.ReactNode;
};

function UserAvatarButton({ children }: UserAvatarButtonProps) {
  // const { data: user } = useGetUser();
  const logout = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children ? (
          children
        ) : (
          <button className="hidden md:block">
            <UserAvatar />
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6">
        <DropdownMenuLabel>{"user?.email"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{"Log out"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatarButton;
