export const initialState = {
  userId: null,
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const LOGIN_USER1 = 'LOGIN_USER1';
export const LOGIN_USER2 = 'LOGIN_USER2';
export const LOGIN_USER3 = 'LOGIN_USER3';
export const LOGOUT = 'LOGOUT';

export const loginUser1Action = () => ({
  // 액션 생성 함수
  type: LOGIN_USER1,
});
export const loginUser2Action = () => ({
  // 액션 생성 함수
  type: LOGIN_USER2,
});
export const loginUser3Action = () => ({
  // 액션 생성 함수
  type: LOGIN_USER3,
});
export const logoutAction = () => ({
  // 액션 생성 함수
  type: LOGOUT,
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case LOGIN_USER1:
      return (state = {
        ...state,
        userId: 1,
      });
    case LOGIN_USER2:
      return (state = {
        ...state,
        userId: 2,
      });
    case LOGIN_USER3:
      return (state = {
        ...state,
        userId: 3,
      });
    default:
      return initialState;
  }
};

export default reducer;