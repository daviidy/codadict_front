export const checkUser = () => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    return true;
  }

  return false;
};

export const checkToken = () => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    return true;
  }

  return false;
};
