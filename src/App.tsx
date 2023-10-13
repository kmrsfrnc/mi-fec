import { Route, Switch } from 'wouter';

import { AppHeader } from './components/AppHeader';
import { Layout } from './components/ui/Layout';
import { CreateVideoPage } from './components/CreateVideoPage';
import { EditVideoPage } from './components/EditVideoPage';
import { HomePage } from './components/HomePage';
import { Paths } from './paths';
import { DataProvider } from './components/DataProvider';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => {
  return (
    <Layout header={<AppHeader />} footer="VManager Demo v0.0.1">
      <DataProvider>
        <Switch>
          <Route path={Paths.HOME} component={HomePage} />
          <Route path={Paths.CREATE_VIDEO} component={CreateVideoPage} />
          <Route path={Paths.UPDATE_VIDEO} component={EditVideoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </DataProvider>
    </Layout>
  );
};
