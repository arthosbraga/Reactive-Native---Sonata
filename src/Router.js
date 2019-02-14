import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import List from './components/List';
import PostDetail from './components/PostDetail';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="list" component={List} title="Anúncios" initial />
        <Scene key="postDetail" component={PostDetail} title="Detalhes" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
