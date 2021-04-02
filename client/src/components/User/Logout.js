import React from 'react';
import UsersApiService from '../../services/UsersApiService';
import auth from '../../utils/auth';

export default function Logout(props) {
  const logout = () => {
    UsersApiService.logout();
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };
  logout()
  return (<></>)
}
