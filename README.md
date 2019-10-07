# begin-redux
> [reference](https://velopert.com/3533)

## 준비

프로젝트에 사용할 패키지들은 다음과 같습니다. yarn이나 npm을 통해 설치해줍니다.
```
$ yarn add redux react-redux redux-actions immutable
```

Redux를 사용한 개발을 좀 더 편리하게 하기 위해 크롬 익스텐션 중 Redux Devtools를 설치합니다.
[chrome 웹스토어](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

리액트 앱에 리덕스를 적용 할 때에는, react-redux 에 들어있는 Provider 를 사용합니다.
프로젝트의 최상위 컴포넌트인 Root 컴포넌트를 열어서, Provider와 store를 불러온 뒤 다음과 같이 코드를 작성했습니다.

`src/Root.js`
```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
```