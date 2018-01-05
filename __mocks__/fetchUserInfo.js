const userInfo = {
  photoUrl: 'http://fakeimg.pl/79x79/',
  userId: '098f6bcd4621d373cade4e832627b4f6'
};

const fetchUserInfo = ({ apiParam, loginData }) => (
  new Promise((resolve, reject) => {
    if (!apiParam || !loginData.eMail || !loginData.password) {
      reject(new Error('Fail to get user info'));
    } else {
      resolve(userInfo);
    }
  })
);

export default fetchUserInfo;
