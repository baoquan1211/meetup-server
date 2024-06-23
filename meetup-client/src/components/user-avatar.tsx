import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import useGetUser from "@/hooks/auth/useGetUser";

function UserAvatar({ className }: { className?: string }) {
  // const { data: user } = useGetUser();

  return (
    <Avatar className={className}>
      <AvatarFallback>
        <span
          className={cn(
            "flex size-10 select-none items-center justify-center rounded-full bg-secondary-foreground text-lg font-semibold capitalize text-secondary shadow",
            className
          )}
        >
          {/* {user?.full_name?.at(0)} */}
          {"A"}
        </span>
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
