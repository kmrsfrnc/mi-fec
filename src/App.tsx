import { Route } from 'wouter';

import { AppHeader } from './components/AppHeader';
import { Layout } from './components/ui/Layout';
import { CreateVideo } from './pages/CreateVideo';
import { EditVideoPage } from './components/EditVideoPage';
import { Home } from './pages/Home';
import { Paths } from './paths';
import { DataProvider } from './components/DataProvider';

export const App = () => {
  return (
    <Layout header={<AppHeader />} footer="VManager Demo v0.0.1">
      <DataProvider>
        <Route path={Paths.HOME} component={Home} />
        <Route path={Paths.CREATE_VIDEO} component={CreateVideo} />
        <Route path={Paths.UPDATE_VIDEO} component={EditVideoPage} />
      </DataProvider>
    </Layout>
  );
};
