import { Switch, Route } from '@modern-js/runtime/router';

import { Button } from 'antd';
import Todo from './Todo';
import './App.css';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="container">
        <main>
          <Button>确定</Button>
          <Todo />
        </main>
        <footer className="footer">
          <a
            href="https://modernjs.dev"
            target="_blank"
            rel="noopener noreferrer">
            Powered by Modern.js
          </a>
        </footer>
      </div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
