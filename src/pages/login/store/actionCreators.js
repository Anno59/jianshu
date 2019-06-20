import axios from 'axios';
import { constants } from './';

export const loginOut = () => ({
  type: constants.LOGIN_OUT,
  state: false,
});

const loginIn = () => ({
  type: constants.LOGIN_IN,
  state: true,
});

export const toLoginIn = (account, pwd) => (
  (dispatch) => {
    axios.get(`${process.env.PUBLIC_URL}/api/login.json?account=${account}&pwd=${pwd}`)
      .then((res) => {
        const data = res.data.data;
        data && dispatch(loginIn());
      })
  }
);