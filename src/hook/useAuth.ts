import { useDispatch, useSelector } from "react-redux";
import {
  companyFollowUnfollowAction,
  friendRequestAction,
  ignoreApiAction,
  loginAction,
  withdrawConnectionAction,
} from "store/action/auth.action";
import type { RootState } from "store";
import type { AppDispatch } from "store";
import { logout } from "store/reducer/auth.reducer";

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, token } = useSelector(
    (state: RootState) => state.auth
  );

  const login = (email: string, password: string) => {
    return dispatch(loginAction({ email, password }));
  };

  const handleLogout = () => dispatch(logout());

  const withdrawConnection = (connectionId: string) => {
    return dispatch(withdrawConnectionAction({ connectionId }));
  };

  const ignoreUser = (ignoredUserId: string) => {
    return dispatch(ignoreApiAction({ ignoredUserId }));
  };

  const friendRequest = (
    type: "send" | "accept" | "reject" | "requests",
    payload: { receiverId?: string; requestId?: string }
  ) => {
    return dispatch(friendRequestAction({ type, payload }));
  };

  const companyFollowUnfollow = (
    companyId: string,
    type: "follow" | "unfollow"
  ) => {
    return dispatch(companyFollowUnfollowAction({ companyId, type }));
  };
  return {
    login,
    handleLogout,
    withdrawConnection,
    friendRequest,
    companyFollowUnfollow,
    ignoreUser,
    loading,
    error,
    token,
  };
};

export default useAuth;
